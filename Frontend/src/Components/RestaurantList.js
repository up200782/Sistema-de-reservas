// src/Components/RestaurantList.js

import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/restaurants')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching restaurants');
        }
        return response.json();
      })
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Restaurantes
      </Typography>
      <Grid container spacing={4}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.restaurantId}>
            <Card>
              <CardMedia
                component="img"
                alt={restaurant.name}
                height="200"
                image={restaurant.imageUrl || 'https://via.placeholder.com/200'} // Imagen por defecto
              />
              <CardContent>
                <Typography variant="h5">{restaurant.name}</Typography>
                <Typography variant="body2">{restaurant.description}</Typography>
                <Typography variant="body2">Horario: {restaurant.openTime} - {restaurant.closeTime}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RestaurantList;
