CREATE TABLE category (category_id serial, category_name varchar(30),
	constraint pk_category_id primary key (category_id));
	
INSERT INTO category (category_name) VALUES 
('Electrónica'),
('Ropa'),
('Hogar y Cocina'),
('Juguetes'),
('Libros'),
('Deportes'),
('Belleza y Salud'),
('Automotriz'),
('Jardín'),
('Mascotas');
