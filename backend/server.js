require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const path = require('path');


// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose
  .connect(
    process.env.MONGO_URL ||
      'mongodb+srv://keerthikar2122:PCr8vleQx1NuWmUo@cluster0.eyxks.mongodb.net/hospitaldb?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  phoneNumber: String,
  email: { type: String, unique: true },
  staffId: { type: String, unique: true },
  role: String,
  department: String,
  specialization: String,
  dateOfJoining: Date,
  username: { type: String, unique: true },
  password: String,
  permanentAddress: String,
  temporaryAddress: String,
  emergencyContactName: String,
  emergencyRelationship: String,
  emergencyContactPhone: String,
  profilePicture: String,
  idProof: String,
  bankName: String,
  accountNumber: String,
  ifscCode: String,
  medicalConditions: String,
});
const UserDetail = mongoose.model('UserDetail', userSchema);

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// Registration API
app.post(
  '/api/register',
  upload.fields([{ name: 'profilePicture' }, { name: 'idProof' }]),
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        dateOfBirth,
        gender,
        phoneNumber,
        email,
        staffId,
        role,
        department,
        specialization,
        dateOfJoining,
        username,
        password,
        permanentAddress,
        temporaryAddress,
        emergencyContactName,
        emergencyRelationship,
        emergencyContactPhone,
        bankName,
        accountNumber,
        ifscCode,
        medicalConditions,
      } = req.body;

      const profilePicture = req.files?.profilePicture?.[0]?.path || null;
      const idProof = req.files?.idProof?.[0]?.path || null;

      // Create a new user document
      const newUser = new UserDetail({
        firstName,
        lastName,
        dateOfBirth,
        gender,
        phoneNumber,
        email,
        staffId,
        role,
        department,
        specialization,
        dateOfJoining,
        username,
        password,
        permanentAddress,
        temporaryAddress,
        emergencyContactName,
        emergencyRelationship,
        emergencyContactPhone,
        profilePicture,
        idProof,
        bankName,
        accountNumber,
        ifscCode,
        medicalConditions,
      });

      // Save the user to the database
      await newUser.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error('Error registering user:', error);

      if (error.code === 11000) {
        // Duplicate key error
        res.status(400).json({
          message: 'Duplicate key error: Email, Staff ID, or Username already exists.',
        });
      } else {
        res.status(500).json({ message: 'Internal server error.' });
      }
    }
  }
);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
