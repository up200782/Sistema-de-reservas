// ReservationBar.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservationBar.css';
import Reserva from '../Reserva/Reserva'; // Asegúrate de importar tu componente Reserva

const ReservationBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numRooms, setNumRooms] = useState(1);
  const [roomDetails, setRoomDetails] = useState([{ adults: 1, children: 0 }]);
  const [showReservation, setShowReservation] = useState(false);
  const [error, setError] = useState('');

  const handleRoomChange = (index, type, value) => {
    const updatedRooms = roomDetails.map((room, i) => {
      if (i === index) {
        return { ...room, [type]: value };
      }
      return room;
    });
    setRoomDetails(updatedRooms);
  };

  const handleNumRoomsChange = (e) => {
    const newNumRooms = parseInt(e.target.value, 10);
    setNumRooms(newNumRooms);
    const newRoomDetails = [...roomDetails];
    while (newRoomDetails.length < newNumRooms) {
      newRoomDetails.push({ adults: 1, children: 0 });
    }
    setRoomDetails(newRoomDetails.slice(0, newNumRooms));
  };

  const handleReserve = () => {
    if (!startDate || !endDate) {
      setError('Por favor, selecciona fechas de llegada y salida.');
    } else {
      setError('');
      setShowReservation(true);
    }
  };

  return (
    <div className="reservation-bar">
      <div className="top-bar">
        <div className="date-picker">
          <label htmlFor="arrival">Llegada y Salida</label>
          <div>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Fecha de llegada"
            />
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Fecha de salida"
            />
          </div>
        </div>
        <div className="dropdown">
          <label htmlFor="num-rooms">Habitaciones</label>
          <select id="num-rooms" value={numRooms} onChange={handleNumRoomsChange}>
            {[...Array(5)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="offers">Oferta</label>
          <select id="offers">
            <option value="">Seleccionar...</option>
            {/* Agrega más opciones aquí */}
          </select>
        </div>
        <button className="reserve-button" onClick={handleReserve}>Reservar</button>
      </div>
      {error && <div className="error">{error}</div>}
      {roomDetails.map((room, index) => (
        <div key={index} className="room-details">
          <h3>Habitación {index + 1}</h3>
          <div>
            <label>Adultos</label>
            <select
              value={room.adults}
              onChange={(e) => handleRoomChange(index, 'adults', parseInt(e.target.value, 10))}
            >
              {[...Array(4)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Niños</label>
            <select
              value={room.children}
              onChange={(e) => handleRoomChange(index, 'children', parseInt(e.target.value, 10))}
            >
              {[...Array(4)].map((_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>
      ))}
      {showReservation && <Reserva />}
    </div>
  );
};

export default ReservationBar;
