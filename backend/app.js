const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userModel = require('./Models/UserModel');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/UserRoutes');
const User = require('./Models/UserModel');
const Feedback = require('./Models/FeedbackModel');
const itemRoutes = require('./routes/ItemRoutes');
const offerRoutes = require('./routes/OfferRoutes');
const packageRoutes = require('./routes/PackageRoutes'); // Import package routes

const app = express();

// Database connection
const DATABASE_URI = "mongodb://0.0.0.0:27017/pizza";
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

})
.then(() => console.log("DB connected"))
.catch((err) => console.error("DB connection error:", err));

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.post("/api/register",async(req,res)=>{
  let user = new userModel(req.body);
  let result = await user.save();
  res.send(result);
})

// Backend endpoint to get user details by email
app.get('/user/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Backend endpoint to fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();
    res.status(200).json({ success: true, message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ success: false, message: 'Error submitting feedback. Please try again later.' });
  }
});

//routes
app.use('/user', authRoutes);
app.use('/user', userRoutes);
app.use('/api', userRoutes);
app.use('/api', itemRoutes);
app.use('/api', offerRoutes);
app.use('/api', packageRoutes); // Use package routes

// Port
const port = 4000;
app.listen(port, () => {
  console.log('server running on port 4000');
});