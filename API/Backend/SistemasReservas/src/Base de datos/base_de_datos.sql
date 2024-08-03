-- Crear base de datos
create user 'admin'@'localhost' identified by 'admin'
GRANT ALL PRIVILEGES ON hotel_management.* TO 'admin'@'localhost' IDENTIFIED BY 'admin';

CREATE DATABASE hotel_management;
USE hotel_management;


-- Tabla para los usuarios
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone_number VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para los tipos de habitaciones
CREATE TABLE RoomTypes (
    room_type_id INT AUTO_INCREMENT PRIMARY KEY,
    room_type_name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- Tabla para las habitaciones
CREATE TABLE Rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_number VARCHAR(50) NOT NULL UNIQUE,
    room_type_id INT,
    description TEXT,
    price_per_night DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (room_type_id) REFERENCES RoomTypes(room_type_id)
);

-- Tabla para las reservaciones
CREATE TABLE Reservations (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    room_id INT,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_cost DECIMAL(10, 2) NOT NULL,
    status ENUM('confirmed', 'cancelled') DEFAULT 'confirmed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id)
);

CREATE TABLE room_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    room_type_id INT,
    image_url VARCHAR(255),
    FOREIGN KEY (room_type_id) REFERENCES roomtypes(room_type_id) ON DELETE CASCADE
);

CREATE TABLE room_prices (
    price_id INT AUTO_INCREMENT PRIMARY KEY,
    room_type_id INT,
    label VARCHAR(255),
    amount DECIMAL(10, 2),
    FOREIGN KEY (room_type_id) REFERENCES roomtypes(room_type_id) ON DELETE CASCADE
);



INSERT INTO roomtypes (room_type_name, description) VALUES
('Habitación Sencilla', 'Confortable habitación individual con todas las comodidades necesarias para una estancia placentera.'),
('Habitación Doble', 'Espaciosa habitación doble, perfecta para parejas o dos personas que buscan confort y espacio.'),
('Suite', 'Nuestra suite ofrece el máximo lujo con instalaciones de primera clase y servicios personalizados.');

INSERT INTO room_images (room_type_id, image_url) VALUES
(1, 'https://example.com/image1.jpg'),
(1, 'https://example.com/image2.jpg'),
(2, 'https://example.com/image3.jpg'),
(2, 'https://example.com/image4.jpg'),
(3, 'https://example.com/image5.jpg'),
(3, 'https://example.com/image6.jpg');

INSERT INTO room_prices (room_type_id, label, amount) VALUES
(1, 'Habitación con vista al jardín', 1000.00),
(1, 'Habitación con vista al mar', 1500.00),
(2, 'Habitación con vista al jardín', 1500.00),
(2, 'Habitación con vista al mar', 2000.00),
(3, 'Habitación con vista al jardín', 2500.00),
(3, 'Habitación con vista al mar', 3000.00);

-- Insertar usuarios
INSERT INTO Users (name, email, phone_number, password_hash) VALUES
('John Doe', 'john.doe@example.com', '1234567890', 'hashed_password_1'),
('Jane Smith', 'jane.smith@example.com', '0987654321', 'hashed_password_2');

-- Insertar tipos de habitaciones
INSERT INTO RoomTypes (room_type_name, description) VALUES
('Single', 'Single room with one bed'),
('Double', 'Double room with two beds'),
('Suite', 'Suite with a king size bed');

-- Insertar habitaciones
INSERT INTO Rooms (room_number, room_type_id, description, price_per_night) VALUES
('101', 1, 'Room 101 description', 50.00),
('102', 2, 'Room 102 description', 80.00),
('201', 3, 'Room 201 description', 150.00);

-- Insertar reservaciones
INSERT INTO Reservations (user_id, room_id, check_in_date, check_out_date, total_cost, status) VALUES
(1, 1, '2024-08-10', '2024-08-15', 250.00, 'confirmed'),  -- Precio ajustado
(2, 2, '2024-08-12', '2024-08-14', 160.00, 'confirmed');