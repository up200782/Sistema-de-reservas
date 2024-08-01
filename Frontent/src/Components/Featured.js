import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const featuredItems = [
  { title: 'Suite de Lujo', image: '/assets/Img/hotel1.jpg' },
  { title: 'Habitación Doble', image: '/assets/Img/hotel2.jpg' },
  { title: 'Habitación Individual', image: '/assets/Img/hotel3.jpg' },
];

function Featured() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Habitaciones Destacadas
      </Typography>
      <Grid container spacing={2}>
        {featuredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" align='center'>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Featured;
