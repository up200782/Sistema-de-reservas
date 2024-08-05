import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { format, differenceInDays, isValid } from 'date-fns';

function ReservationDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Obtener los datos del estado de navegación
  const selectedRooms = location.state?.selectedRooms || [];
  const adults = location.state?.adults || [];
  const children = location.state?.children || [];
  const [checkIn, checkOut] = location.state?.dates?.map(date => new Date(date)) || [new Date(), new Date()];
  
  // Calcular el número de noches
  const nights = differenceInDays(checkOut, checkIn);

  // Calcular el total general
  const totalGeneral = selectedRooms.reduce((total, room) => {
    const pricePerNight = parseInt(room.selectedPrice.amount.replace(/[^0-9]/g, ''), 10);
    return total + pricePerNight;
  }, 0) * nights;

  // Estado para los valores de los campos y errores
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    direccion: '',
    nombreTarjeta: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  // Validaciones de campos
  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const cardNumberRegex = /^[0-9]{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    if (!nameRegex.test(formData.nombre)) {
      newErrors.nombre = 'El nombre debe contener solo letras.';
    }
    if (!nameRegex.test(formData.apellidos)) {
      newErrors.apellidos = 'Los apellidos deben contener solo letras.';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Debe ser un correo electrónico válido.';
    }
    if (!phoneRegex.test(formData.telefono)) {
      newErrors.telefono = 'Debe ser un número de teléfono válido (10 dígitos).';
    }
    if (!formData.direccion) {
      newErrors.direccion = 'La dirección es obligatoria.';
    }
    if (!nameRegex.test(formData.nombreTarjeta)) {
      newErrors.nombreTarjeta = 'El nombre en la tarjeta debe contener solo letras.';
    }
    if (!cardNumberRegex.test(formData.numeroTarjeta)) {
      newErrors.numeroTarjeta = 'El número de tarjeta debe ser de 16 dígitos.';
    }
    if (!expiryDateRegex.test(formData.fechaExpiracion)) {
      newErrors.fechaExpiracion = 'Debe ser en formato MM/YY.';
    }
    if (!cvvRegex.test(formData.cvv)) {
      newErrors.cvv = 'El CVV debe ser de 3 o 4 dígitos.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservationComplete = () => {
    if (validateFields()) {
      // Navegar a la página de confirmación
      navigate('/confirmation', { state: { selectedRooms, adults, children, checkIn, checkOut, formData } });
    }
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
          <TextField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            error={!!errors.nombre}
            helperText={errors.nombre || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            error={!!errors.apellidos}
            helperText={errors.apellidos || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            error={!!errors.telefono}
            helperText={errors.telefono || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Dirección"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            error={!!errors.direccion}
            helperText={errors.direccion || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Método de pago
          </Typography>
          <TextField
            label="Nombre en la tarjeta"
            name="nombreTarjeta"
            value={formData.nombreTarjeta}
            onChange={handleChange}
            error={!!errors.nombreTarjeta}
            helperText={errors.nombreTarjeta || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Número de tarjeta"
            name="numeroTarjeta"
            value={formData.numeroTarjeta}
            onChange={handleChange}
            error={!!errors.numeroTarjeta}
            helperText={errors.numeroTarjeta || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Fecha de expiración"
            name="fechaExpiracion"
            value={formData.fechaExpiracion}
            onChange={handleChange}
            error={!!errors.fechaExpiracion}
            helperText={errors.fechaExpiracion || 'MM/YY'}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            error={!!errors.cvv}
            helperText={errors.cvv || ''}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
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

