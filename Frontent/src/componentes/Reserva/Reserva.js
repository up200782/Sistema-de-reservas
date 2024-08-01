import React, { useState } from 'react';

const Reserva = () => {
  const [huesped, setHuesped] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  const [pago, setPago] = useState({
    nombreTarjeta: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: ''
  });

  const handleHuespedChange = (e) => {
    const { name, value } = e.target;
    setHuesped((prevHuesped) => ({
      ...prevHuesped,
      [name]: value
    }));
  };

  const handlePagoChange = (e) => {
    const { name, value } = e.target;
    setPago((prevPago) => ({
      ...prevPago,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Información del huésped:', huesped);
    console.log('Método de pago:', pago);
  };

  return (
    <div>
      <h1>Detalles de la reservación</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Información del huésped</legend>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={huesped.nombre}
            onChange={handleHuespedChange}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={huesped.apellido}
            onChange={handleHuespedChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={huesped.email}
            onChange={handleHuespedChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={huesped.telefono}
            onChange={handleHuespedChange}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={huesped.direccion}
            onChange={handleHuespedChange}
          />
        </fieldset>
        <fieldset>
          <legend>Método de pago</legend>
          <input
            type="text"
            name="nombreTarjeta"
            placeholder="Nombre en la tarjeta"
            value={pago.nombreTarjeta}
            onChange={handlePagoChange}
          />
          <input
            type="text"
            name="numeroTarjeta"
            placeholder="Número de tarjeta"
            value={pago.numeroTarjeta}
            onChange={handlePagoChange}
          />
          <input
            type="text"
            name="fechaExpiracion"
            placeholder="Fecha de expiración"
            value={pago.fechaExpiracion}
            onChange={handlePagoChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={pago.cvv}
            onChange={handlePagoChange}
          />
        </fieldset>
        <button type="submit">Reservar</button>
      </form>
      <div>
        <h2>Su reservación</h2>
        <p>4 Noche(s)</p>
        <p>Llegada: <b>lun, 16 de Junio de 2024</b></p>
        <p>Salida: <b>vie, 20 de Junio de 2024</b></p>
        <p>Habitación 1: $$$</p>
        <p>Habitación 2: $$$</p>
        <p>Código promocional: $$$</p>
        <p>Total: $$$</p>
        <p>✓ Free cancellation until 11:59 PM on December 20, 2023</p>
        <p>✓ NO PREPAYMENT NEEDED - pay at the property</p>
      </div>
    </div>
  );
};

export default Reserva;
