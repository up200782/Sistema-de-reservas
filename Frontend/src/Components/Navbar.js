import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Reservation from './Reservation';
import logoHotel from '../logohotel.webp';

function Navbar({ scrollToGallery, scrollToAccommodation, scrollToRestaurants }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/main');
  };

  const renderProgressBar = () => {
    const currentStep =
      location.pathname === '/rooms'
        ? 1
        : location.pathname === '/reservation-details'
        ? 2
        : location.pathname === '/confirmation'
        ? 3
        : 0;

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 800 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: currentStep === 1 ? '#f0c020' : '#fff',
                fontWeight: currentStep === 1 ? 'bold' : 'normal',
                mr: 2,
              }}
            >
              1 Elige el tipo de habitación
            </Typography>
            <Box sx={{ flexGrow: 1, height: 2, backgroundColor: '#fff', ml: 2 }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Box sx={{ flexGrow: 0.5, height: 2, backgroundColor: '#fff', mr: 3 }} />
            <Typography
              variant="body1"
              sx={{
                color: currentStep === 2 ? '#f0c020' : '#fff',
                fontWeight: currentStep === 2 ? 'bold' : 'normal',
                mr: 2,
              }}
            >
              2 Información y Datos
            </Typography>
            <Box sx={{ flexGrow: 0.5, height: 2, backgroundColor: '#fff', ml: 2 }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Box sx={{ flexGrow: 0.3, height: 2, backgroundColor: '#fff', mr: 3 }} />
            <Typography
              variant="body1"
              sx={{
                color: currentStep === 3 ? '#f0c020' : '#fff',
                fontWeight: currentStep === 3 ? 'bold' : 'normal',
              }}
            >
              3 Confirmación
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  const renderNavbarButtons = () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        color="inherit"
        onClick={scrollToGallery}
        sx={{
          borderRadius: '20px',
          borderColor: '#fff',
          border: '1px solid',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#D32F2F',
          },
        }}
      >
        Galería
      </Button>
      <Button
        color="inherit"
        onClick={scrollToAccommodation}
        sx={{
          borderRadius: '20px',
          borderColor: '#fff',
          border: '1px solid',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#D32F2F',
          },
        }}
      >
        Alojamiento
      </Button>
      <Button
        color="inherit"
        onClick={scrollToRestaurants}
        sx={{
          borderRadius: '20px',
          borderColor: '#fff',
          border: '1px solid',
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#D32F2F',
          },
        }}
      >
        Restaurantes
      </Button>
      <Reservation />
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#D32F2F' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={logoHotel}
            alt="Logo del hotel"
            style={{ height: '40px', cursor: 'pointer' }}
            onClick={handleLogoClick}
          />
        </Box>
        {location.pathname === '/rooms' || location.pathname === '/reservation-details' || location.pathname === '/confirmation'
          ? renderProgressBar()
          : renderNavbarButtons()}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;