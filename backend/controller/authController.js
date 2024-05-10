const User = require('../Models/UserModel');
const ErrorResponse = require('../utils/errorResponse');



exports.register = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new ErrorResponse("E-mail already registered", 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
};


exports.signInUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;


        // Check if user with provided email exists
        const user = await User.findOne({ email : email});


        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }


        // Validate password
        const isPasswordValid = await user.comparePassword(password);


        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }


        // Return success response with token
        res.status(200).json({
            success: true,
            role:user.role
        });
    } catch (error) {
        next(error);
    }
};