import React from "react";
import { Box, Typography } from "@mui/material";

const MedicalServices = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#e0f7fa" }}>
      <Typography variant="h4" align="center" gutterBottom>
        24/7 Medical Services
      </Typography>
      <Typography variant="body1" paragraph>
        Our system ensures that medical services are available around the clock. With real-time updates and seamless communication between the hospital staff and patients, we ensure that medical needs are met promptly, regardless of the time.
      </Typography>
    </Box>
  );
};

export default MedicalServices;
