CREATE DATABASE IF NOT EXISTS RESERVAS;
drop user 'full'@'localhost' IDENTIFIED BY 'full';

GRANT ALL PRIVILEGES ON FULL.* TO 'full'@'localhost';