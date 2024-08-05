import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography } from '@mui/material';

function RoomGallery() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/rooms')
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Habitaciones y suites
      </Typography>
      <Carousel>
        {rooms.map((room) => (
          <Paper key={room.roomId} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <Box sx={{ flex: 1, padding: 2 }}>
              <Typography variant="h5">{room.roomType}</Typography>
              <Typography variant="body1">{room.description}</Typography> {/* Mostrar descripción */}
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src={room.imageUrl || 'https://via.placeholder.com/400'}
                alt={room.roomType}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </Box>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export default RoomGallery;
