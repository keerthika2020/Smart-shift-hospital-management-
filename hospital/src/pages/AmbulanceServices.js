import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const AmbulanceServices = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f1f1f1" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Ambulance Services
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Our hospital management system integrates ambulance services to ensure rapid response during emergencies. With just a few clicks, patients can request an ambulance service, and our team will dispatch it immediately.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Benefits:
            <ul>
              <li>Quick and efficient ambulance dispatch</li>
              <li>Real-time tracking of ambulance location</li>
              <li>Integrated with hospital emergency protocols</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="../../assets/images/ambulance.jpg" alt="Ambulance" style={{ width: "100%", borderRadius: "8px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AmbulanceServices;
