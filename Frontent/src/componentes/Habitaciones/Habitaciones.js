import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Habitaciones.css'; // Asegúrate de crear este archivo CSS para estilos adicionales

const habitaciones = [
  {
    imagen: 'url_de_imagen_1',
    descripcion: 'Descripción de la habitación 1',
    precio1: 1000,
    precio2: 1500
  },
  {
    imagen: 'url_de_imagen_2',
    descripcion: 'Descripción de la habitación 2',
    precio1: 1000,
    precio2: 1500
  },
  {
    imagen: 'url_de_imagen_3',
    descripcion: 'Descripción de la habitación 3',
    precio1: 1000,
    precio2: 1500
  },
  {
    imagen: 'url_de_imagen_4',
    descripcion: 'Descripción de la habitación 4',
    precio1: 1000,
    precio2: 1500
  }
];

const Habitaciones = () => {
  return (
    <div className="hotel-booking">
      <header>
        <h1>NombreHotel</h1>
        <div className="steps">
          <span>1. Elige el tipo de habitación</span>
          <span>2. Información y Datos</span>
          <span>3. Confirmación</span>
        </div>
      </header>
      <h2>Seleccione el tipo de habitación que desee:</h2>
      <Carousel showThumbs={false}>
        {habitaciones.map((hab, index) => (
          <div key={index} className="habitacion">
            <img src={hab.imagen} alt={`Habitación ${index + 1}`} />
            <div className="detalle-habitacion">
              <p>{hab.descripcion}</p>
              <p>$ {hab.precio1} MXN</p>
              <p>$ {hab.precio2} MXN</p>
              <button>Escoger</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Habitaciones;
