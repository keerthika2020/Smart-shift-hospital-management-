const express = require('express');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const User = require('../models/User');
const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Store files in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Create unique filenames
  },
});

const upload = multer({ storage: storage });

// Register route with file upload
router.post('/register', upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'idProof', maxCount: 1 }
]), async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, gender, phoneNumber, email, username, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle file uploads
    const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : '';
    const idProof = req.files['idProof'] ? req.files['idProof'][0].path : '';

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phoneNumber,
      email,
      username,
      password: hashedPassword,
      profilePicture,
      idProof,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in registration' });
  }
});

module.exports = router;
