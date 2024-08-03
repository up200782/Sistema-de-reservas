import React from 'react';
import { Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: '105px',
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?hotel)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000000',
        textAlign: 'center',
        marginTop: '20px', //Separación para el navbar
      }}
    >
      <Typography variant="h3" component="h3">
        Hotel Ramada Encore
      </Typography>
      <Typography variant="h4" component="h4">
        de Ramada Worldwide
      </Typography>
    </Box>
  );
}

export default Hero;
