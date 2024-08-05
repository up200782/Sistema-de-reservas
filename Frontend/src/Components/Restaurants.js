import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const restaurantItems = [
  { title: 'Vista al Mar', image: '/assets/Img/r1.jpg', description: 'Disfruta de la vista al mar mientras comes.' },
  { title: 'Parrilla', image: '/assets/Img/r2.jpg', description: 'Deliciosas parrillas con una amplia variedad de carnes.' },
  { title: 'Freddy Fazbear', image: '/assets/Img/r3.jpg', description: 'El restaurante temático que te sorprenderá.' },
];

function Restaurants() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Restaurantes
      </Typography>
      <Grid container spacing={4}>
        {restaurantItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Restaurants;
