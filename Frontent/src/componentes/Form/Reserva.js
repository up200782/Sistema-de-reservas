import React from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import './Reserva.css';

const Reserva = () => {
  return (
    <Box className="reservation-details">
      <Typography variant="h6" gutterBottom>
        Detalles de la reservación
      </Typography>
      <Box className="section">
        <Typography variant="subtitle1" gutterBottom>
          Información del huésped
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Nombre"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Apellido"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Correo Electrónico"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Teléfono"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="Dirección"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      <Box className="section">
        <Typography variant="subtitle1" gutterBottom>
          Método de pago
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="cardName"
              name="cardName"
              label="Nombre en la tarjeta"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Número de la tarjeta"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="expiryDate"
              name="expiryDate"
              label="Fecha de vencimiento"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" color="primary" className="reserve-button">
        Reservar
      </Button>
    </Box>
  );
};

export default Reserva;