import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const doctorsData = {
  cardiology: [
    {
      name: "Dr. K R Balakrishnan",
      specialization: "Cardiology",
      image: "image.png",
      details: "Chairman - Cardiac Sciences. Director - Institute of Heart & Lung Transplantation.",
    },
    {
      name: "Dr. Swaminathan M",
      specialization: "Cardiology",
      image: "image.png",
      details: "Director & Senior Consultant - Interventional Cardiology.",
    },
  ],
  // Add more specializations with doctors here
};

function DoctorsList() {
  const { specialization } = useParams();
  const doctors = doctorsData[specialization] || [];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Doctors specializing in {specialization.charAt(0).toUpperCase() + specialization.slice(1)}
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={doctor.name}
                height="140"
                image={doctor.image}
              />
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography>{doctor.details}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DoctorsList;
