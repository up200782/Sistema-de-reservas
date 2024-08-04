import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Paper, CardMedia } from '@mui/material';

function FeaturedCarousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Obtener habitaciones y restaurantes desde el backend
    const fetchRooms = fetch('http://localhost:8080/api/rooms')
      .then((response) => response.json())
      .catch((error) => console.error('Error fetching rooms:', error));

    const fetchRestaurants = fetch('http://localhost:8080/api/restaurants')
      .then((response) => response.json())
      .catch((error) => console.error('Error fetching restaurants:', error));

    Promise.all([fetchRooms, fetchRestaurants])
      .then(([roomsData, restaurantsData]) => {
        const combinedData = [
          {
            type: 'hotel',
            id: 'hotel-main',
            title: 'Bienvenido a Nuestro Hotel',
            description: 'Disfruta de una experiencia única en nuestro hotel, con las mejores comodidades y un servicio excepcional.',
            imageUrl: '/assets/Img/exterior.jpg' // Reemplaza con la URL de tu imagen del hotel           
            },
          {
            type: 'hotel-interior',
            id: 'hotel-interior',
            title: 'Explora Nuestros Interiores',
            description: 'Descubre el diseño interior elegante y moderno de nuestras instalaciones.',
            imageUrl: '/assets/Img/interior.jpg' // Reemplaza con la URL de tu imagen del interior del hotel           },
          },
            ...roomsData.map((room) => ({
            type: 'room',
            id: room.roomId,
            title: room.roomType,
            description: room.description || 'Descripción no disponible.',
            imageUrl: room.imageUrl || 'https://via.placeholder.com/800x400',
          })),
          {
            type: 'pool',
            id: 'hotel-pool',
            title: 'Relájate en Nuestra Piscina',
            description: 'Disfruta de momentos de relajación y diversión en nuestra impresionante piscina.',
            imageUrl: '/assets/Img/piscina.jpg' // Reemplaza con la URL de tu imagen de la piscina
          },
          ...restaurantsData.map((restaurant) => ({
            type: 'restaurant',
            id: restaurant.restaurantId,
            title: restaurant.name,
            description: restaurant.description || 'Descripción no disponible.',
            imageUrl: restaurant.imageUrl || 'https://via.placeholder.com/800x400',
          })),
        ];
        setItems(combinedData);
      })
      .catch((error) => console.error('Error combining data:', error));
  }, []);

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Carousel
        navButtonsAlwaysVisible
        indicators={true}
        indicatorIconButtonProps={{
          style: {
            color: '#C0C0C0', // Color de los indicadores
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: '#008B8B', // Color del indicador activo
          },
        }}
        indicatorContainerProps={{
          style: {
            textAlign: 'center', // Centrar los indicadores
          },
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <Paper key={item.id} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
              <Box sx={{ flex: 1, padding: 2 }}>
                <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontSize: '1.25rem', color: 'text.secondary' }}>
                  {item.description}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="400"
                  image={item.imageUrl}
                  sx={{ width: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Paper>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
            Cargando elementos...
          </Typography>
        )}
      </Carousel>
    </Box>
  );
}

export default FeaturedCarousel;
