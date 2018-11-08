-- --------------------------------------------------------
-- Vært:                         localhost
-- Server-version:               10.1.28-MariaDB - mariadb.org binary distribution
-- ServerOS:                     Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for yell
CREATE DATABASE IF NOT EXISTS `yell` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `yell`;

-- Dumping structure for tabel yell.yell
CREATE TABLE IF NOT EXISTS `yell` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='THIS TABLE HOLDS ALL YELLS';

-- Dumping data for table yell.yell: ~0 rows (approximately)
/*!40000 ALTER TABLE `yell` DISABLE KEYS */;
REPLACE INTO `yell` (`id`, `content`, `timestamp`) VALUES
	(1, '?', '2018-11-08 12:18:02'),
	(2, 'I AM FUCKING ANGRY AT YOU RIGHT NOW', '2018-11-08 12:18:37'),
	(3, 'I AM FUCKING ANGRY AT YOU RIGHT NOW', '2018-11-08 12:20:18'),
	(4, 'I AM FUCKING ANGRY AT YOU RIGHT NOW', '2018-11-08 12:21:38'),
	(5, 'I AM FUCKING ANGRY AT YOU RIGHT NOW', '2018-11-08 12:22:09');
/*!40000 ALTER TABLE `yell` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
