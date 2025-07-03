-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql:3306
-- Tiempo de generación: 06-05-2025 a las 07:35:29
-- Versión del servidor: 8.0.42
-- Versión de PHP: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: tienda
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla cart_items
--

CREATE TABLE cart_items (
  id int NOT NULL,
  product_id int NOT NULL,
  quantity int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla products
--

CREATE TABLE products (
  id int NOT NULL,
  name varchar(100) NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  quantity int NOT NULL,
  image_url varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla cart_items
--
ALTER TABLE cart_items
  ADD PRIMARY KEY (id),
  ADD KEY product_id (product_id);

--
-- Indices de la tabla products
--
ALTER TABLE products
  ADD PRIMARY KEY (id);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla cart_items
--
ALTER TABLE cart_items
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla products
--
ALTER TABLE products
  MODIFY id int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla cart_items
--
ALTER TABLE cart_items
  ADD CONSTRAINT cart_items_ibfk_1 FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

INSERT INTO `products` (`id`, `name`, `description`, `price`, `quantity`, `image_url`)
VALUES
(1, 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', 109.95, 100, 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'),
(2, 'Mens Casual Premium Slim Fit T-Shirts', 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.', 22.30, 100, 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'),
(3, 'Mens Cotton Jacket', 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member.', 55.99, 100, 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'),
(4, 'Mens Casual Slim Fit', 'The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.', 15.99, 100, 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'),
(5, 'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean''s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.', 695.00, 100, 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'),
(6, 'Solid Gold Petite Micropave', 'Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed.', 168.00, 100, 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'),
(7, 'White Gold Plated Princess', 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine''s Day...', 9.99, 100, 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'),
(8, 'Pierced Owl Rose Gold Plated Stainless Steel Double', 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', 10.99, 100, 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'),
(9, 'WD 2TB Elements Portable External Hard Drive - USB 3.0', 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity', 64.00, 100, 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'),
(10, 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', 'Easy upgrade for faster boot up, shutdown, application load and response', 109.00, 100, 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'),
(11, 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', '3D NAND flash are applied to deliver high transfer speeds. Optimized performance and reliability.', 109.00, 100, 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'),
(12, 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity', 114.00, 100, 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'),
(13, 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', '21.5 inches Full HD widescreen IPS display with Free Sync technology. Zero-frame design and ultra-thin.', 599.00, 100, 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'),
(14, 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor', '49 INCH SUPER ULTRAWIDE CURVED GAMING MONITOR with dual 27-inch screen side by side.', 999.99, 100, 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'),
(15, 'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats', 'Detachable design for various seasons. Adjustable cuffs to prevent wind and water for a comfortable fit.', 56.99, 100, 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'),
(16, 'Lock and Love Women''s Removable Hooded Faux Leather Moto Biker Jacket', 'Faux leather jacket with removable hood. Stylish and comfortable. Hand wash only.', 29.95, 100, 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'),
(17, 'Rain Jacket Women Windbreaker Striped Climbing Raincoats', 'Lightweight raincoat with adjustable waist and hood. Suitable for various outdoor activities.', 39.99, 100, 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'),
(18, 'MBJ Women''s Solid Short Sleeve Boat Neck V', 'Lightweight fabric with great stretch for comfort. Ribbed sleeves and neckline.', 9.85, 100, 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'),
(19, 'Opna Women''s Short Sleeve Moisture', 'Lightweight, breathable fabric with moisture-wicking properties.', 7.95, 100, 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'),
(20, 'DANVOUY Womens T Shirt Casual Cotton Short', 'Casual short sleeve cotton t-shirt with stretch. Perfect for everyday wear.', 12.99, 100, 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg');
