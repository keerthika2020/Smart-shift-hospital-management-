import React from "react";
import { Box, Typography, Grid } from "@mui/material";
//import hospitalImage from "../../assets/images/hospital.jpg"; // Example image

const AboutUs = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Vitality Lifecare
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <img src="chennai.png" alt="Hospital" style={{ width: "100%", borderRadius: "8px" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            At Vitality Lifecare, we aim to streamline healthcare services and improve patient care with our cutting-edge management system. Our platform helps hospitals improve operational efficiency, manage appointments, track patient history, and more.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
