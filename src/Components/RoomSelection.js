// src/Components/RoomSelection.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate, useLocation } from 'react-router-dom';

function RoomSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const [rooms, setRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const numRooms = location.state?.numRooms || 1;
  const adults = location.state?.adults || [1];
  const children = location.state?.children || [0];

  const dates = location.state?.dates?.map(date => new Date(date)) || [new Date(), new Date()];

  useEffect(() => {
    fetch('http://localhost:8080/api/rooms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching rooms');
        }
        return response.json();
      })
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  const handleSelectRoom = (room) => {
    if (selectedRooms.length < numRooms) {
      setSelectedRooms([...selectedRooms, room]);
    }
    if (selectedRooms.length + 1 === numRooms) {
      setOpenDialog(true);
    }
  };

  const handleConfirmSelection = () => {
    setOpenDialog(false);
    navigate('/reservation-details', { state: { selectedRooms, adults, children, dates } });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Seleccione el tipo de habitación que desee ({selectedRooms.length}/{numRooms})
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.roomId}>
            <Card>
              <CardMedia
                component="img"
                alt={room.roomType}
                height="200"
                image={room.imageUrl || 'https://via.placeholder.com/200'}
                title={room.roomType}
              />
              <CardContent>
                <Typography variant="h5">{room.roomType}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {room.description}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Precio por noche: ${room.price} MXN
                </Typography>
                <Button variant="outlined" color="primary" onClick={() => handleSelectRoom(room)}>
                  Escoger
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmación de Habitaciones</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Ha seleccionado las siguientes habitaciones:</Typography>
          <ul>
            {selectedRooms.map((room, index) => (
              <li key={index}>
                {room.roomType} - Habitación: {room.roomNumber} - Adultos: {adults[index]}, Niños: {children[index]}
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button onClick={handleConfirmSelection} variant="contained" color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RoomSelection;
