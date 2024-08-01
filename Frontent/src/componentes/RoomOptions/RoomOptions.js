import React from 'react';
import './RoomOptions.css';

const RoomOptions = () => {
  const rooms = [
    {
      id: 1,
      name: 'Habitación Estándar',
      description: 'Una habitación cómoda con todas las comodidades básicas.',
      price: '$100 por noche',
      imageUrl: 'https://via.placeholder.com/300x200', // reemplaza con una URL real de la imagen
    },
    {
      id: 2,
      name: 'Habitación Deluxe',
      description: 'Una habitación más espaciosa con vistas al jardín.',
      price: '$150 por noche',
      imageUrl: 'https://via.placeholder.com/300x200', // reemplaza con una URL real de la imagen
    },
    {
      id: 3,
      name: 'Suite',
      description: 'Una suite lujosa con sala de estar y balcón privado.',
      price: '$250 por noche',
      imageUrl: 'https://via.placeholder.com/300x200', // reemplaza con una URL real de la imagen
    },
  ];

  return (
    <div className="room-options">
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <img src={room.imageUrl} alt={room.name} />
          <div className="room-card-details">
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p className="price">{room.price}</p>
            <button>Reservar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomOptions;
