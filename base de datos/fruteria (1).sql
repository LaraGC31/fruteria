-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-04-2025 a las 21:03:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fruteria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `precio` float NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'fruta'),
(2, 'verdura');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepedido`
--

CREATE TABLE `detallepedido` (
  `id` int(11) NOT NULL,
  `idPedido` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detallepedido`
--

INSERT INTO `detallepedido` (`id`, `idPedido`, `idProducto`, `cantidad`, `precio`) VALUES
(1, 1, 1, 1, 2.15),
(2, 1, 2, 1, 3.15),
(3, 2, 2, 1, 3.15),
(4, 3, 1, 3, 2.15),
(5, 3, 2, 4, 3.15),
(6, 3, 5, 1, 1.55),
(7, 4, 1, 1, 2.15),
(8, 4, 2, 1, 3.15),
(9, 4, 4, 1, 2.2),
(10, 5, 4, 1, 2.2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `estado` varchar(200) NOT NULL,
  `totalPrecio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `idUsuario`, `fecha`, `estado`, `totalPrecio`) VALUES
(1, 5, '2025-04-26 20:56:46', 'pendiente', 5.3),
(2, 5, '2025-04-26 20:57:05', 'pendiente', 5.15),
(3, 5, '2025-04-26 20:57:31', 'pendiente', 20.6),
(4, 5, '2025-04-26 21:01:23', 'pendiente', 9.5),
(5, 5, '2025-04-26 21:02:15', 'pendiente', 4.2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `idCategoria` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `foto` varchar(500) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `idCategoria`, `stock`, `foto`, `descripcion`, `precio`) VALUES
(1, 'Manzana Golden', 1, 1, '1743950945_6319961manzana.jpg', 'Su característica principal es su sabor dulce y de gran textura. La adquirismos principalmente  een la región de Aragón', 2.15),
(2, 'Plátano de Canarias', 1, 1, '1743951171_5672669platanos.jpg', 'Son famosos por su sabor dulce y textura suave, se cultivan en las Islas Canarias con demoninación de origen , estos son una delicia para el paladar', 3.15),
(3, 'Peras Conference', 1, 1, '1743951264_1729112peras.jpg', 'Son conocidas por su sabor dulce, se cultivan en Aragón, estas son muy ricas para comer un cualquier sitio y lugar', 1.99),
(4, 'Pimientos Verdes', 2, 1, '1743951425_5645653pimientos.jpg', 'Son conocidos por su sabor intenso y crujiente, se cultivan en Andalucía , son muy buenos para frituras y guisos', 2.2),
(5, 'Naranjas', 1, 1, '1743951652_4488447naranja.jpg', 'Son conocidos por su sabor dulce y jugoso,  es un citrico muy importante que se procede de Valencia, también con gran cantidad de zumo', 1.55),
(6, 'Col ', 2, 1, '1743951748_3671924col.jpg', 'Son conocidas por su sabor intenso y crujiente, se cultivan en Cataluña, son una excelente opción para las ensaladas y guisos', 2.3),
(7, 'Berenjenas', 2, 1, '1743951936_9623511berenjena.jpg', 'Son conocidas por su sabor intenso, se cultivan en la región de Murcia, son una excelente opción para cocinar y platos de verduras', 1.99),
(8, 'Limones', 1, 1, '1743952076_8414262limones.jpg', 'Son conocidos por su sabor ácido, se cultivan en la región de Murcia, son una excelente opción para la repostería y la cocina', 1.97),
(9, 'Calabacines', 2, 1, '1743952202_9172770calabacines.jpg', 'Son conocidos por distintas aplicaciones tanto curdos como en guisos, se cultivan en la región de Valencia', 1.7),
(10, 'Tomates', 2, 1, '1743952283_2773189tomates.jpg', 'Son conocidos por su gran varidad de aplicaciones tanto crudos como cocinados, se cultivan en Andalucía', 1.7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombreApellidos` varchar(200) NOT NULL,
  `rol` varchar(10) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `provincia` varchar(200) NOT NULL,
  `direccion` varchar(500) NOT NULL,
  `codPostal` int(10) NOT NULL,
  `telefono` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombreApellidos`, `rol`, `email`, `password`, `provincia`, `direccion`, `codPostal`, `telefono`) VALUES
(1, 'Lara González', 'A', 'larita.gonzal.carranco@gmail.com', '$2y$10$hPpUQEFDn3bJfARBJEann.v/zXsLZC21Qz9qqtJznGeNc5A361bRK', 'Avila', 'Colonia Viña Navas Nº 38', 5270, '697338721'),
(2, 'Hector González Carranco', 'CL', 'carrancopardosandra@gmail.com', '$2y$10$pTZOKMsxD7M3U6pAIM2bz.OC1NbtGmpZqAWh/dYnxdcm.Ze1fx/Jy', 'Avila', 'Colonia Viña Navas Nº 38', 5270, '678465263'),
(5, 'Pepe Goméz', 'CL', 'pepe.gomez@gmail.com', '$2y$10$NT0oSCef9TJdnygyNHyCsutG7liZxs45n7JpD7K8hKfHpzosqsoOO', 'Avila', 'La Vieje que mato N28', 5270, '698523418'),
(6, 'Juan Cruz', 'CL', 'juan.cruz@gmail.com', '$2y$10$KVkTmxWwj8QMvFrJmfO9NusVK69CkWvE47XNsijCaSJddib.gVnKS', 'Avila', 'Calle Viña Navas 78', 5270, '698772180');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProducto` (`idProducto`),
  ADD KEY `idPedido` (`idPedido`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=179;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `detallepedido_ibfk_3` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
