import React, { useState } from 'react';
import { Popover, Button, Typography, Box, TextField, MenuItem, Divider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateRangePicker } from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function Reservation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState([dayjs(), dayjs().add(1, 'day')]);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState([1]);
  const [children, setChildren] = useState([0]);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setStep(1);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleRoomChange = (e) => {
    const numberOfRooms = parseInt(e.target.value, 10);
    setRooms(numberOfRooms);

    const newAdults = Array(numberOfRooms).fill(1);
    const newChildren = Array(numberOfRooms).fill(0);

    setAdults(newAdults);
    setChildren(newChildren);
  };

  const handleAdultChange = (index, value) => {
    const updatedAdults = [...adults];
    updatedAdults[index] = value;
    setAdults(updatedAdults);
  };

  const handleChildrenChange = (index, value) => {
    const updatedChildren = [...children];
    updatedChildren[index] = value;
    setChildren(updatedChildren);
  };

  const handleDateConfirm = () => {
    setStep(2);
  };


  const handleReservationConfirm = () => {
    const formattedDates = value.map(date => date.toISOString());
    navigate('/rooms', { state: { numRooms: rooms, adults, children, dates: formattedDates } });
  };


  return (
    <div>
      <Button
        variant="outlined"
        color="inherit"
        onClick={handleClick}
        sx={{
          borderRadius: '20px',
          borderColor: '#fff',
          border: '1px solid',
          color: '#fff',
          textTransform: 'capitalize',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#D32F2F',
            border: '1px solid #D32F2F',
          },
        }}
      >
        Reservar
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 4, width: 600 }}>
          {step === 1 && (
            <>
              <Typography variant="h6" gutterBottom>
                Selecciona las Fechas
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  startText="Fecha de Entrada"
                  endText="Fecha de Salida"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} fullWidth sx={{ mb: 4, mr: 2 }} />
                      <TextField {...endProps} fullWidth sx={{ mb: 4, ml: 2 }} />
                    </>
                  )}
                />
              </LocalizationProvider>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  borderRadius: '10px',
                  textTransform: 'capitalize',
                  backgroundColor: '#fff',
                  color: '#808080',
                  width: '200px', //Ancho botón
                  alignSelf: 'center', //Centrar botón
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  border: '1px solid #ccc', //Agregar borde
                  '&:hover': {
                    backgroundColor: '#D32F2F',
                    color: '#fff',
                  },
                }}
                onClick={handleDateConfirm}
              >
                Siguiente
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <Typography variant="h6" gutterBottom>
                Selecciona las Habitaciones y Ocupación
              </Typography>
              <TextField
                select
                label="Número de Habitaciones"
                value={rooms}
                onChange={handleRoomChange}
                fullWidth
                sx={{ mb: 4 }}
              >
                {[1, 2, 3, 4, 5].map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              {Array.from({ length: rooms }, (_, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    Habitación {index + 1}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography sx={{ mr: 2 }}>Adultos</Typography>
                    <TextField
                      select
                      value={adults[index]}
                      onChange={(e) => handleAdultChange(index, parseInt(e.target.value, 10))}
                      sx={{ width: 60, mr: 4 }}
                    >
                      {[1, 2, 3, 4].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography sx={{ mr: 2 }}>Niños</Typography>
                    <TextField
                      select
                      value={children[index]}
                      onChange={(e) => handleChildrenChange(index, parseInt(e.target.value, 10))}
                      sx={{ width: 60 }}
                    >
                      {[0, 1, 2, 3, 4].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                  {index < rooms - 1 && <Divider />}
                </Box>
              ))}
              <Button
                variant="contained"
                sx={{
                  mt: 2,
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
                onClick={handleReservationConfirm}
              >
                Confirmar
              </Button>
            </>
          )}
        </Box>
      </Popover>
    </div>
  );
}

export default Reservation;
