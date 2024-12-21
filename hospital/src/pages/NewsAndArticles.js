import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const NewsAndArticles = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: "#fafafa" }}>
      <Typography variant="h4" align="center" gutterBottom>
        News & Articles
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Stay updated with the latest news and developments in healthcare. Our platform keeps you informed with the most recent articles, research, and trends in hospital management and patient care.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewsAndArticles;
