import React, { useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('token');
  }, []);

  const handleLoginRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Logout Successful
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have been successfully logged out.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLoginRedirect}>
        Go to Login
      </Button>
    </Container>
  );
};

export default Logout;