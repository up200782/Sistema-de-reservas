-- Crear la base de datos
CREATE DATABASE hotel_management;
USE hotel_management;


-- Crear la tabla de clientes
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL, 
    phone VARCHAR(15),
    address VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de habitaciones
CREATE TABLE rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number VARCHAR(10) NOT NULL,
    room_type VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL -- possible statuses: available, occupied, maintenance
);

-- Crear la tabla de reservas
CREATE TABLE reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    room_id INT NOT NULL,
    reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- possible statuses: pending, confirmed, cancelled
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

-- Crear la tabla de pagos
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    reservation_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_method VARCHAR(50) NOT NULL, -- possible methods: credit card, cash, bank transfer
    FOREIGN KEY (reservation_id) REFERENCES reservations(reservation_id)
);

-- Insertar datos en la tabla de clientes
INSERT INTO customers (first_name, last_name, email, phone, address)
VALUES 
('Jorge', 'Doe', 'john.doe@example.com', '123456789', '123 Fake Street'),
('Jane', 'Smith', 'jane.smith@example.com', '987654321', '456 Elm Street'),
('Nelly', 'Huerta', 'nelly.huerta@example.com', '4494939402', '123 Street')

-- Insertar datos en la tabla de habitaciones
INSERT INTO rooms (room_number, room_type, price)
VALUES 
('101', 'Single', 50.00),
('102', 'Double', 75.00),
('103', 'Double', 75.00);

-- Insertar datos en la tabla de reservas
INSERT INTO reservations (customer_id, room_id, check_in_date, check_out_date)
VALUES 
(1, 1, '2024-07-20', '2024-07-25'),
(2, 2, '2024-08-01', '2024-08-05'),
(5, 3, '2024-07-12', '2021-07-13');

-- Insertar datos en la tabla de pagos
INSERT INTO payments (reservation_id, amount, payment_method)
VALUES 
(1, 250.00, 'credit card'),
(2, 375.00, 'cash');

select * from customers;