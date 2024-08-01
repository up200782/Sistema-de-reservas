import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Featured from './Components/Featured';
import ImageCarousel from './Components/ImageCarousel';
import Restaurants from './Components/Restaurants';
import Footer from './Components/Footer';
import RoomSelection from './Components/RoomSelection';
import ReservationDetails from './Components/ReservationDetails';
import Confirmation from './Components/Confirmation';
import Gallery from './Components/Gallery';
import Login from './Components/Login';

function App() {
  const location = useLocation(); //Hook para tener la ruta actual

  const galleryRef = useRef(null);
  const accommodationRef = useRef(null);
  const restaurantsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //Si se deben mostrar la Navbar y el Footer
  const showNavAndFooter = location.pathname !== '/'; // Mostrar Navbar y Footer en todas las rutas excepto en "/"

  return (
    <>
      <CssBaseline />
      {showNavAndFooter && (
        <Navbar
          scrollToGallery={() => scrollToSection(galleryRef)}
          scrollToAccommodation={() => scrollToSection(accommodationRef)}
          scrollToRestaurants={() => scrollToSection(restaurantsRef)}
        />
      )}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Página principal: login */}
        <Route
          path="/main"
          element={
            <Container>
              <Hero />
              <ImageCarousel />
              <div ref={galleryRef}>
                <Gallery />
              </div>
              <div ref={accommodationRef}>
                <Featured />
              </div>
              <div ref={restaurantsRef}>
                <Restaurants />
              </div>
            </Container>
          }
        />
        <Route path="/rooms" element={<RoomSelection />} />
        <Route path="/reservation-details" element={<ReservationDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      {showNavAndFooter && <Footer />} {/* Mostrar Footer solo si la ruta no es "/" */}
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
