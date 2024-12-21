import React from "react";
import { Box, Typography } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f1f8e9" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose Vitality Lifecare
      </Typography>
      <Typography variant="body1" paragraph>
        At Vitality Lifecare, we offer a cutting-edge hospital management system designed to improve patient care and streamline hospital operations. Some reasons why you should choose us:
      </Typography>
      <ul>
        <li>Seamless integration with existing hospital systems</li>
        <li>Real-time data access for better decision-making</li>
        <li>24/7 customer support</li>
        <li>Efficient management of appointments and medical records</li>
      </ul>
    </Box>
  );
};

export default WhyChooseUs;
