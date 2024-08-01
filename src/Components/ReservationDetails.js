import React from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { format, differenceInDays, isValid } from 'date-fns';

function ReservationDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedRooms = location.state?.selectedRooms || [];
  const adults = location.state?.adults || [];
  const children = location.state?.children || [];

  const [checkIn, checkOut] = location.state?.dates?.map(date => new Date(date)) || [new Date(), new Date()];

  const nights = differenceInDays(checkOut, checkIn);

  const totalGeneral = selectedRooms.reduce((total, room) => {
    const pricePerNight = parseInt(room.selectedPrice.amount.replace(/[^0-9]/g, ''), 10);
    return total + pricePerNight;
  }, 0) * nights;

  const handleReservationComplete = () => {
    navigate('/confirmation', { state: { selectedRooms, adults, children, checkIn, checkOut } });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Detalles de la reservación
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Información del huésped
          </Typography>
          <TextField label="Nombre" fullWidth sx={{ mb: 2 }} />
          <TextField label="Apellidos" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" fullWidth sx={{ mb: 2 }} />
          <TextField label="Teléfono" fullWidth sx={{ mb: 2 }} />
          <TextField label="Dirección" fullWidth sx={{ mb: 2 }} />
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Método de pago
          </Typography>
          <TextField label="Nombre en la tarjeta" fullWidth sx={{ mb: 2 }} />
          <TextField label="Número de tarjeta" fullWidth sx={{ mb: 2 }} />
          <TextField label="Fecha de expiración" fullWidth sx={{ mb: 2 }} />
          <TextField label="CVV" fullWidth sx={{ mb: 2 }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resumen de su reserva
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1">
                  Fecha de llegada: {isValid(checkIn) ? format(checkIn, 'dd/MM/yyyy') : 'Fecha inválida'}
                </Typography>
                <Typography variant="body1">
                  Fecha de salida: {isValid(checkOut) ? format(checkOut, 'dd/MM/yyyy') : 'Fecha inválida'}
                </Typography>
                <Typography variant="body1">
                  Noches: {nights > 0 ? nights : 'Fecha inválida'}
                </Typography>
              </Box>
              {selectedRooms.map((room, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1">Tipo: {room.title}</Typography>
                  <Typography variant="body1">Vista: {room.selectedPrice.label}</Typography>
                  <Typography variant="body1">Adultos: {adults[index]}</Typography>
                  <Typography variant="body1">Niños: {children[index]}</Typography>
                  <Typography variant="body1">Precio por noche: {room.selectedPrice.amount}</Typography>
                </Box>
              ))}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">
                  Total: {totalGeneral.toLocaleString()} MXN
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          mt: 4,
          borderRadius: '20px',
          textTransform: 'capitalize',
          backgroundColor: '#fff',
          color: '#808080',
          width: '200px',
          alignSelf: 'center',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #ccc',
          '&:hover': {
            backgroundColor: '#D32F2F',
            color: '#fff',
          },
        }}
        onClick={handleReservationComplete}
      >
        Confirmar
      </Button>
    </Box>
  );
}

export default ReservationDetails;
