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
  const [userError, setUserError] = React.useState(''); // Estado para el error de usuario
  const [passwordError, setPasswordError] = React.useState(''); // Estado para el error de contraseña
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validateUser = (user) => {
    return user && user.trim().length > 0;
  };

  const validatePassword = (password) => {
    return password && password.length >= 6;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('User');
    const password = data.get('password');

    // Validar los campos antes de hacer la petición
    if (!validateUser(email)) {
      setUserError('Username is required.');
      setSnackbarMessage('Username is required.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    } else {
      setUserError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters.');
      setSnackbarMessage('Password must be at least 6 characters.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    } else {
      setPasswordError('');
    }

    try {
      const response = await fetch(`http://localhost:8080/api/customers/valid/${email}`, {
        method: "GET",
      });

      if (response.status !== 200) {
        setUserError('Please enter a valid username or password.');
        setSnackbarMessage('Please enter a valid username or password.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        return;
      }

      const userData = await response.json();
      console.log(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setSnackbarMessage('Login successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);

      navigate('/Main');
    } catch (error) {
      console.error('Error fetching user data:', error);
      setSnackbarMessage('There was an error processing your request. Please try again later.');
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
              id="User"
              label="User"
              name="User"
              autoComplete="email"
              autoFocus
              error={!!userError}
              helperText={userError}
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
              error={!!passwordError}
              helperText={passwordError}
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