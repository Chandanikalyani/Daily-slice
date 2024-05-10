const User = require('../Models/UserModel');


// create a new user
exports.registerUser = async (req, res, next) => {
    try {
        const user = await User.create (req.body);       
         res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        next(error);
    }
};

// sign in controller
exports.signInUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Check if user with provided email exists
        const user = await User.findOne({ email });

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

        // Generate JWT token
        const token = user.generateAuthToken();

        // Return success response with token
        res.status(200).json({
            success: true,
            token
        });
    } catch (error) {
        next(error);
    }
};

// get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            count: users.length,
            users
        });
    } catch (error) {
        next(error);
    }
    
};
