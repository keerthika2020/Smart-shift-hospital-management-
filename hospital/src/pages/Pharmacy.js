import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Pharmacy = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pharmacy
      </Typography>
      <Typography variant="body1" paragraph>
        Our pharmacy management system allows patients and hospital staff to easily access prescription details, medicine availability, and delivery options. We also offer prescription refills through our user-friendly interface.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Features:
            <ul>
              <li>Real-time availability of medications</li>
              <li>Easy prescription management</li>
              <li>Online refills and home delivery options</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pharmacy;
