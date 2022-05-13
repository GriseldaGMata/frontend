-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 13-05-2022 a las 20:48:47
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gmata_usuarios`
-- //para entrega final
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(300) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `img_id`, `subtitulo`, `cuerpo`) VALUES
(1, 'Reforma: requisitos extranjería', 'rxunqpn9sxck9zyhwdtv', 'Ultima actualización del BOE', 'Afectaría a las gestiones de Solicitud de nacionalidad y residencia regular en el pais. '),
(2, 'Votar en el exterior', 'hzcwxpkmtrmtc9ogaksp', '¿Opcional?', 'Todo lo que necesitas al respecto de este tema. ¿Como, donde y cuando?'),
(4, 'DNI, domicilio y pasaporte', 'vtzf1hds53crhewd82vx', '¿Que debo hacer primero?', ' Declaración de domicilio en el exterior, nuevo DNI y renovación de pasaporte.'),
(7, 'Relocacion', 'fuilzmkhnwa13u9emcpc', 'Todo lo que necesitas analizar antes de cambiar de pais. ', 'Zonas mas convenientes según tus necesidades. Zonas: salud, comercio y educación. Valor de m2, obra nueva. Compra y/o alquiler de propiedades. Movilidad propia o leasing.'),
(6, 'Matrimonio', 'lt3h0dfhkbruhkzlffzn', 'En el exterior o formalización de pareja.', 'Pareja conformadas, matrimonio, divorcio.'),
(8, 'Traslado de valores.', 'prub6ibo57u81suskr03', 'Transferencias y portabilidad de moneda. Comex y liquido.', 'Apertura de cuenta bancaria y respaldo de movimientos. Limites y comisiones. Respaldos. Declaración de renta. Cuentas en conjunto. Sociedades.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `tipo` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `tipo`) VALUES
(1, 'griselda', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(2, 'marcela', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(3, 'pepe', '81dc9bdb52d04dc20036dbd8313ed055', 'modelo'),
(4, 'juan', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(5, 'ema', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(6, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(7, 'lucas', '81dc9bdb52d04dc20036dbd8313ed055', 'modelo'),
(8, 'jorge', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(9, 'nilda', '81dc9bdb52d04dc20036dbd8313ed055', 'modelo'),
(10, 'juana', '81dc9bdb52d04dc20036dbd8313ed055', 'principal'),
(11, 'julieta', '81dc9bdb52d04dc20036dbd8313ed055', 'modelo'),
(12, 'hernan', '81dc9bdb52d04dc20036dbd8313ed055', 'principal');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
