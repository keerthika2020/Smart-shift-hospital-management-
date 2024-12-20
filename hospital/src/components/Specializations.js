import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

function Specializations() {
  const navigate = useNavigate();

  const specializations = ["Cardiology", "Neurology", "Orthopedics"];

  return (
    <div className="specializations-container">
      <Typography variant="h5" align="center" style={{ margin: "20px" }}>
        Our Specializations
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {specializations.map((spec) => (
          <Grid item key={spec}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(`/doctors/${spec.toLowerCase()}`)}
            >
              {spec}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Specializations;
