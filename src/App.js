// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import FeaturedCarousel from './Components/FeaturedCarousel';
import RestaurantList from './Components/RestaurantList';
import RoomSelection from './Components/RoomSelection';
import ReservationDetails from './Components/ReservationDetails';

function App() {
  const location = useLocation();
  const [rooms, setRooms] = useState([]);

  const showNavAndFooter = location.pathname !== '/';

  useEffect(() => {
    fetch('http://localhost:8080/api/rooms')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching rooms');
        }
        return response.json();
      })
      .then(data => setRooms(data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <>
      <CssBaseline />
      {showNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={
            <Container>
              <FeaturedCarousel />
              <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                Habitaciones y suites
              </Typography>
              <Grid container spacing={4}>
                {rooms.map((room) => (
                  <Grid item key={room.roomId} xs={12} sm={6} md={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt={room.roomType}
                        height="140"
                        image={room.imageUrl || 'https://via.placeholder.com/150'}
                      />
                      <CardContent>
                        {/* Solo se muestra el título */}
                        <Typography variant="h5">{room.roomType}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <RestaurantList />
            </Container>
          }
        />
        <Route path="/rooms" element={<RoomSelection />} />
        <Route path="/reservation-details" element={<ReservationDetails />} />
      </Routes>
      {showNavAndFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
