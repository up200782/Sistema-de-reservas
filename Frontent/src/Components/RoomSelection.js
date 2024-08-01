import React, { useState } from 'react';
import { Box, Typography, Card, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate, useLocation } from 'react-router-dom';

const roomTypes = [
  {
    title: 'Habitación Sencilla',
    description: 'Confortable habitación individual con todas las comodidades necesarias para una estancia placentera.',
    prices: [
      { label: 'Habitación con vista al jardín', amount: '$1,000 MXN' },
      { label: 'Habitación con vista al mar', amount: '$1,500 MXN' }
    ],
    images: [
      'https://source.unsplash.com/600x400/?hotel-room-1',
      'https://source.unsplash.com/600x400/?hotel-room-2',
      'https://source.unsplash.com/600x400/?hotel-room-3',
    ],
  },
  {
    title: 'Habitación Doble',
    description: 'Espaciosa habitación doble, perfecta para parejas o dos personas que buscan confort y espacio.',
    prices: [
      { label: 'Habitación con vista al jardín', amount: '$1,500 MXN' },
      { label: 'Habitación con vista al mar', amount: '$2,000 MXN' }
    ],
    images: [
      'https://source.unsplash.com/600x400/?hotel-room-double-1',
      'https://source.unsplash.com/600x400/?hotel-room-double-2',
      'https://source.unsplash.com/600x400/?hotel-room-double-3',
    ],
  },
  {
    title: 'Suite',
    description: 'Nuestra suite ofrece el máximo lujo con instalaciones de primera clase y servicios personalizados.',
    prices: [
      { label: 'Habitación con vista al jardín', amount: '$2,500 MXN' },
      { label: 'Habitación con vista al mar', amount: '$3,000 MXN' }
    ],
    images: [
      'https://source.unsplash.com/600x400/?hotel-suite-1',
      'https://source.unsplash.com/600x400/?hotel-suite-2',
      'https://source.unsplash.com/600x400/?hotel-suite-3',
    ],
  },
];

function RoomSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const numRooms = location.state?.numRooms || 1;
  const adults = location.state?.adults || [1];
  const children = location.state?.children || [0];

  const dates = location.state?.dates?.map(date => new Date(date)) || [new Date(), new Date()];

  const handleSelectRoom = (roomType, price) => {
    if (selectedRooms.length < numRooms) {
      setSelectedRooms([...selectedRooms, { ...roomType, selectedPrice: price }]);
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
        {roomTypes.map((room, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ flex: 1 }}>
                <Carousel navButtonsAlwaysVisible>
                  {room.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Slide ${idx}`}
                      style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                    />
                  ))}
                </Carousel>
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {room.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {room.description}
                </Typography>
                {room.prices.map((price, idx) => (
                  <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1">{price.label} - {price.amount}</Typography>
                    <Button variant="outlined" color="primary" onClick={() => handleSelectRoom(room, price)}>
                      Escoger
                    </Button>
                  </Box>
                ))}
              </Box>
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
                {room.title} - {room.selectedPrice.label} 
                - Adultos: {adults[index]}, Niños: {children[index]}
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
