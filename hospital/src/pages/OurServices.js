import React from "react";
import { Box, Typography, Grid } from "@mui/material";
//import serviceImage from "../../assets/images/services.jpg"; // Example image

const OurServices = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#e9ecef" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            We offer a comprehensive range of services designed to make healthcare easier for both patients and medical staff. Our hospital management system includes:
            <ul>
              <li>Appointment Scheduling</li>
              <li>Patient Records Management</li>
              <li>Real-time Data Access</li>
              <li>24/7 Emergency Services</li>
              <li>Pharmacy Integration</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="service.jpg" alt="Services" style={{ width: "100%", borderRadius: "8px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurServices;
