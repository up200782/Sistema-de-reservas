import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Login() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (email === 'user@example.com' && password === 'password123') {
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      //Lleva al usuario a la página principal después de iniciar sesión bn
      setTimeout(() => {
        navigate('/main'); // Cambia a /main a la ruta que se dirige
      }, 2000);
    } else {
      setSnackbarMessage('Invalid email or password.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          minHeight: '100vh',
          backgroundImage:
            'url(https://images.adsttc.com/media/images/53c8/6d3c/c07a/805e/0800/01c0/newsletter/PORTADA_MG_3113.jpg?1405644066)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            backdropFilter: 'blur(10px)', 
            maxWidth: '400px', //Ancho máximo formulario
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#673ab7',
                  },
                  '&:hover fieldset': {
                    borderColor: '#5e35b1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#5e35b1',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#673ab7',
                  },
                  '&:hover fieldset': {
                    borderColor: '#5e35b1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#5e35b1',
                  },
                },
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#fff',
                color: '#808080',
                borderRadius: '20px',
                border: '1px solid #ccc',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#D32F2F',
                  color: '#fff',
                },
              }}
            >
              Siguiente
            </Button>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="body2" color="textSecondary">
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Forgot password?
                </a>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Don't have an account? Sign Up
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
