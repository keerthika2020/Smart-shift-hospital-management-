import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ maxWidth: "600px", margin: "auto" }}>
        <Typography variant="body1" gutterBottom>
          For any inquiries or support, please reach out to us using the form below or contact our customer service.
        </Typography>
        <TextField fullWidth label="Name" variant="outlined" sx={{ marginBottom: "20px" }} />
        <TextField fullWidth label="Email" variant="outlined" sx={{ marginBottom: "20px" }} />
        <TextField fullWidth label="Message" variant="outlined" multiline rows={4} sx={{ marginBottom: "20px" }} />
        <Button variant="contained" color="primary" sx={{ width: "100%" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
