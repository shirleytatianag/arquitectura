CREATE TABLE product (
    product_id SERIAL,
    product_name VARCHAR(50),
    product_detail VARCHAR(200),
    product_price NUMERIC,
    product_image TEXT,
    category_id INT,
    CONSTRAINT pk_product_id PRIMARY KEY (product_id),
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category(category_id)
);


INSERT INTO product (product_name, product_detail, product_price, product_image, category_id) VALUES 
('Telefono inteligente', 'Telefono de ultima generacion con camara de alta resolucion y pantalla tactil.', 599.99, 'base64_encoded_image_data', 1),
('Camisa de algodon', 'Camisa comoda y fresca ideal para el verano.', 29.99, 'base64_encoded_image_data', 2),
('Sarten antiadherente', 'Sarten de calidad premium con revestimiento antiadherente.', 39.99, 'base64_encoded_image_data', 3),
('Peluche de oso', 'Peluche suave y adorable, perfecto para regalar.', 15.99, 'base64_encoded_image_data', 4),
('Novela de misterio', 'Libro emocionante lleno de intriga y suspenso.', 12.99, 'base64_encoded_image_data', 5),
('Balon de futbol', 'Balon oficial de tamano estandar para jugar al futbol.', 19.99, 'base64_encoded_image_data', 6),
('Crema hidratante', 'Crema hidratante para el cuidado diario de la piel.', 9.99, 'base64_encoded_image_data', 7),
('Aceite de motor sintetico', 'Aceite de motor sintetico de alta calidad para automoviles.', 24.99, 'base64_encoded_image_data', 8),
('Podadora electrica', 'Podadora electrica para mantener el cesped corto y limpio.', 149.99, 'base64_encoded_image_data', 9),
('Collar de perlas', 'Elegante collar de perlas perfecto para ocasiones especiales.', 79.99, 'base64_encoded_image_data', 10);