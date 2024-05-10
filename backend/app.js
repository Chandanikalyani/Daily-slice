const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userModel = require('./Models/UserModel');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/UserRoutes');

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
app.use (express.json());


app.post("/api/register",async(req,res)=>{
  let user = new userModel(req.body);
  let result = await user.save();
  res.send(result);
})

// Backend endpoint to get user details by email
app.get('/user/:email', async (req, res) => {
  try {
    const email = req.params.email;
    // Query the database to get user details by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    // Return user details as response
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


//routes
app.use('/user',authRoutes);
app.use('/user',userRoutes);

// Port
const port = 4000;

app.listen(port, () => {
  console.log('server running ${port}');
});
