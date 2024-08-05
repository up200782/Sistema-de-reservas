import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { format, differenceInDays, isValid } from 'date-fns';

function Confirmation() {
  const location = useLocation();
  const { selectedRooms = [], adults = [], children = [], checkIn, checkOut } = location.state || {};

  // Validar fechas y calcular el número de noches
  const validCheckIn = isValid(new Date(checkIn)) ? new Date(checkIn) : new Date();
  const validCheckOut = isValid(new Date(checkOut)) ? new Date(checkOut) : new Date(validCheckIn.getTime() + 24 * 60 * 60 * 1000);
  const nights = differenceInDays(validCheckOut, validCheckIn);

  // Calcular el total general sumando los precios seleccionados
  const totalGeneral = selectedRooms.reduce((total, room) => {
    const pricePerNight = parseInt(room.selectedPrice.amount.replace(/[^0-9]/g, ''), 10);
    return total + pricePerNight;
  }, 0) * nights;

  // Generar número de confirmación
  const confirmationNumber = Math.floor(100000 + Math.random() * 900000);

  // Función para imprimir la confirmación
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Confirmación de compra
      </Typography>
      <Box sx={{ mb: 4, p: 2, bgcolor: 'success.main', color: 'white', borderRadius: 1 }}>
        <Typography variant="h6">
          ¡Su reservación está garantizada y pagada!
        </Typography>
        <Typography variant="body1">
          Número de confirmación: {confirmationNumber}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resumen de su reserva
              </Typography>
              {selectedRooms.map((room, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1">Tipo: {room.title}</Typography>
                  <Typography variant="body1">Vista: {room.selectedPrice.label}</Typography>
                  <Typography variant="body1">Adultos: {adults[index]}</Typography>
                  <Typography variant="body1">Niños: {children[index]}</Typography>
                  <Typography variant="body1">Precio por noche: {room.selectedPrice.amount}</Typography>
                </Box>
              ))}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1">Fecha de llegada: {isValid(validCheckIn) ? format(validCheckIn, 'dd/MM/yyyy') : 'Fecha inválida'}</Typography>
                <Typography variant="body1">Fecha de salida: {isValid(validCheckOut) ? format(validCheckOut, 'dd/MM/yyyy') : 'Fecha inválida'}</Typography>
                <Typography variant="body1">Noches: {nights > 0 ? nights : 'Fecha inválida'}</Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">
                  Total: {totalGeneral.toLocaleString()} MXN
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Habitación
              </Typography>
              <img
                src={selectedRooms[0]?.images[0] || 'https://via.placeholder.com/200'}
                alt="Imagen de la habitación"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <Typography variant="body2" sx={{ mt: 2 }}>
                {selectedRooms[0]?.description || 'Descripción no disponible'}
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Ubicación del hotel
              </Typography>
              {/*Google Maps*/}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9518408988536!2d-102.29358638463543!3d21.842583885558602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429edb73fb3d299%3A0x53e363de1c2dcc8f!2sRamada%20Encore%20By%20Wyndham%20Aguascalientes!5e0!3m2!1sen!2smx!4v1673457363020!5m2!1sen!2smx"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación del hotel"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handlePrint}
        sx={{
          mt: 4,
          borderRadius: '10px',
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
      >
        Imprimir Confirmación
      </Button>
    </Box>
  );
}

export default Confirmation;