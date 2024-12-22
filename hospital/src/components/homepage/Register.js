import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Link } from 'react-router-dom'; // Add this import
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Import axios for API requests
import NotificationCard from './NotificationCard';


function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    staffId: "",
    role: "",
    department: "",
    specialization: "",
    dateOfJoining: "",
    username: "",
    password: "",
    permanentAddress: "",
    temporaryAddress: "",
    emergencyContactName: "",
    emergencyRelationship: "",
    emergencyContactPhone: "",
    profilePicture: null,
    idProof: null,
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    medicalConditions: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false); // For password visibility toggle
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
const [username, setUsername] = useState("");


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle password visibility
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const apiUrl = 'http://localhost:8080/api/register'; // Backend endpoint
    const formDataToSend = new FormData();

    // Add all form data to FormData for file upload compatibility
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post(apiUrl, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setUsername(formData.username);
      setShowNotification(true); // Show notification card
        setSuccessMessage("Registration successful! Redirecting to login...");
        setTimeout(() => {
          setShowNotification(false); // Hide after 3 seconds
          navigate("/login");
        }, 3000); // Redirect after 2 seconds
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Registration failed.");
      } else {
        setErrorMessage("Unable to connect to the server. Please try again later.");
      }
    }
  };

  return (
  <div>
<Header/>
{showNotification && (
      <NotificationCard
        message="You have been registered successfully!"
        username={username}
        onClose={() => setShowNotification(false)}
      />
    )}
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "50px 0" }}>
      

      <div className="container" style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#edf5ec", padding: "30px", borderRadius: "8px" }}>
      <h1
          style={{
            textAlign: "center",
            color: "#0F6A6B",
            marginBottom: "30px",
          }}
        >
          User Registration
        </h1>
        {errorMessage && (
            <div style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div style={{ color: "green", textAlign: "center", marginBottom: "20px" }}>
              {successMessage}
            </div>
          )}
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-section">
          <h2 style={{ color: "#0F6A6B", marginBottom: "15px" }}>
              1. Personal Information
            </h2>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" name="firstName" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" name="lastName" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="date_of_birth">Date of Birth</label>
              <input type="date" id="date_of_birth" name="dateOfBirth" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input type="text" id="phone_number" name="phoneNumber" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={handleChange} required />
            </div>
          </div>

          {/* Professional Information */}
          <div className="form-section">
          <h2 style={{ color: "#0F6A6B", marginBottom: "15px" }}>2. Professional Information</h2>
            <div className="form-group">
              <label htmlFor="staff_id">Staff ID</label>
              <input type="text" id="staff_id" name="staffId" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role/Designation</label>
              <input type="text" id="role" name="role" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input type="text" id="department" name="department" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <select id="specialization" name="specialization" onChange={handleChange} required>
                <option value="">Select Specialization</option>
                <option value="Admin">Admin</option>
                <option value="Management">Management</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date_of_joining">Date of Joining</label>
              <input type="date" id="date_of_joining" name="dateOfJoining" onChange={handleChange} required />
            </div>
          </div>

          {/* Credentials */}
          <div className="form-section">
          <h2 style={{ color: "#0F6A6B", marginBottom: "15px" }}>3. Credentials</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={handlePasswordVisibility}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="form-section">
          <h2 style={{ color: "#0F6A6B", marginBottom: "15px" }}>4. Address Details</h2>
            <div className="form-group">
              <label htmlFor="permanent_address">Permanent Address</label>
              <textarea id="permanent_address" name="permanentAddress" rows="3" onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="temporary_address">Temporary Address</label>
              <textarea id="temporary_address" name="temporaryAddress" rows="3" onChange={handleChange}></textarea>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="form-section">
          <h2 style={{ color: "#0F6A6B", marginBottom: "15px" }}>5. Emergency Contact</h2>
            <div className="form-group">
              <label htmlFor="emergency_contact_name">Emergency Contact Name</label>
              <input type="text" id="emergency_contact_name" name="emergencyContactName" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="emergency_relationship">Relationship</label>
              <input type="text" id="emergency_relationship" name="emergencyRelationship" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="emergency_contact_phone">Emergency Contact Phone</label>
              <input type="text" id="emergency_contact_phone" name="emergencyContactPhone" onChange={handleChange} required />
            </div>
          </div>

          {/* Additional Information */}
          <div className="form-section">
          <h2 style={{ color: "#0F6A6B", marginBottom: "15px" }}>6. Additional Information</h2>
            <div className="form-group">
              <label htmlFor="profile_picture">Profile Picture</label>
              <input type="file" id="profile_picture" name="profilePicture" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="id_proof">Identification Proof</label>
              <input type="file" id="id_proof" name="idProof" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="bank_name">Bank Name</label>
              <input type="text" id="bank_name" name="bankName" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="account_number">Account Number</label>
              <input type="text" id="account_number" name="accountNumber" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="ifsc_code">IFSC Code</label>
              <input type="text" id="ifsc_code" name="ifscCode" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="medical_conditions">Medical Details</label>
              <textarea id="medical_conditions" name="medicalConditions" rows="3" onChange={handleChange}></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-group">
          <button
              type="submit"
              style={{
                backgroundColor: "#0F6A6B",
                color: "primary",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#054D4F")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0F6A6B")}
            >
              Register
            </button>
          </div>
        </form>

        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#0F6A6B" }}>Sign in</Link> {/* Link updated to redirect to /login */}
        </p>
      </div>
    </div>
    <Footer/>
</div>
  );
}

export default Register;



 {/* Home Image Icon to Navigate to Homepage 
              <Link to="/" style={{ position: "absolute", top: "20px", right: "20px", zIndex: 100 }}>
                <img src="/assets/home.jpg" alt="Home" style={{ width: "40px", height: "40px", cursor: "pointer" }} />
              </Link>*/}