const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  gender: String,
  phoneNumber: String,
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: String, // Profile picture URL
  idProof: String, // ID proof URL
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
