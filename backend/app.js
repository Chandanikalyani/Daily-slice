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
const packageRoutes = require('./routes/PackageRoutes');
const placeRoutes = require('./routes/PlaceRoutes'); // Import place routes
const feedbackRoutes = require('./routes/FeedbackRoutes');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// Database connection
const DATABASE_URI = "mongodb://localhost:27017/pizza";
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log("DB connected"))
.catch((err) => console.error("DB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Ensure directories exist
const directories = ['public/itemPictures', 'public/placeImages'];
directories.forEach(dir => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Register route for users
app.post("/api/register", async (req, res) => {
  let user = new userModel(req.body);
  let result = await user.save();
  res.send(result);
});

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

// Backend endpoint to submit feedback
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

// Multer configuration for item pictures
const itemStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/itemPictures');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Multer configuration for place images
const placeStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/placeImages');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadItem = multer({ storage: itemStorage });
const uploadPlace = multer({ storage: placeStorage });

// Route to handle file upload for item pictures
app.post('/api/upload/item', uploadItem.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const imagePath = `/public/itemPictures/${req.file.filename}`; // Adjust path here
  res.json({ imagePath: imagePath });
});

// Route to handle file upload for place images
app.post('/api/upload/place', uploadPlace.array('images', 50), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  const imagePaths = req.files.map(file => `/public/placeImages/${file.filename}`); // Adjust path here
  res.json({ imagePaths: imagePaths });
});


// Routes
app.use('/user', authRoutes);
app.use('/user', userRoutes);
app.use('/api', itemRoutes);
app.use('/api', offerRoutes);
app.use('/api', packageRoutes);
app.use('/api', placeRoutes); // Use place routes
app.use('/api',feedbackRoutes);


// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Port
const port = 4000;
app.listen(port, () => {
  console.log('Server running on port 4000');
});
