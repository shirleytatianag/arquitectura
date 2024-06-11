CREATE TABLE product (
    product_id SERIAL,
    product_name VARCHAR(50),
    product_detail VARCHAR(200),
    product_price NUMERIC
    product_image TEXT
    category_id INT,
    CONSTRAINT pk_product_id PRIMARY KEY (product_id),
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category(category_id)
);


INSERT INTO product (product_name, product_detail, product_price, product_image, category_id) VALUES 
('Teléfono inteligente', 'Teléfono de última generación con cámara de alta resolución y pantalla táctil.', 599.99, 'base64_encoded_image_data', 1),
('Camisa de algodón', 'Camisa cómoda y fresca ideal para el verano.', 29.99, 'base64_encoded_image_data', 2),
('Sartén antiadherente', 'Sartén de calidad premium con revestimiento antiadherente.', 39.99, 'base64_encoded_image_data', 3),
('Peluche de oso', 'Peluche suave y adorable, perfecto para regalar.', 15.99, 'base64_encoded_image_data', 4),
('Novela de misterio', 'Libro emocionante lleno de intriga y suspenso.', 12.99, 'base64_encoded_image_data', 5),
('Balón de fútbol', 'Balón oficial de tamaño estándar para jugar al fútbol.', 19.99, 'base64_encoded_image_data', 6),
('Crema hidratante', 'Crema hidratante para el cuidado diario de la piel.', 9.99, 'base64_encoded_image_data', 7),
('Aceite de motor sintético', 'Aceite de motor sintético de alta calidad para automóviles.', 24.99, 'base64_encoded_image_data', 8),
('Podadora eléctrica', 'Podadora eléctrica para mantener el césped corto y limpio.', 149.99, 'base64_encoded_image_data', 9),
('Collar de perlas', 'Elegante collar de perlas perfecto para ocasiones especiales.', 79.99, 'base64_encoded_image_data', 10);