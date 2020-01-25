-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Sep 10, 2019 at 09:12 AM
-- Server version: 5.5.58-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql12304235`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `ID` int(11) NOT NULL,
  `Date` varchar(10) NOT NULL,
  `EventName` varchar(250) NOT NULL,
  `Time` varchar(5) NOT NULL,
  `City` varchar(120) NOT NULL,
  `SeatPlaces` int(11) NOT NULL,
  `FreePlaces` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=koi8u;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`ID`, `Date`, `EventName`, `Time`, `City`, `SeatPlaces`, `FreePlaces`) VALUES
(1, '05.09.2019', 'Angular Webinar', '12:50', 'Tel Aviv', 100, 100),
(2, '07.09.2019', 'React Webinar', '13:50', 'Hulon', 100, 100),
(5, '06.09.2019', 'Vue Webinar', '18:50', 'Kfar Saba', 100, 100),
(6, '09.09.2019', 'PHP Webinar', '14:50', 'Raanana', 100, 100),
(7, '08.09.2019', 'JavaScript Webinar', '13:50', 'Rishon', 100, 100);

-- --------------------------------------------------------

--
-- Table structure for table `visitors`
--

CREATE TABLE `visitors` (
  `ID` int(11) NOT NULL,
  `EventName` varchar(250) NOT NULL,
  `VisitorName` varchar(120) NOT NULL,
  `Places` int(11) NOT NULL,
  `EventID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=koi8u COMMENT='Visitors';

--
-- Dumping data for table `visitors`
--

INSERT INTO `visitors` (`ID`, `EventName`, `VisitorName`, `Places`, `EventID`) VALUES
(1, 'Angular Webinar', 'Slava Sanin', 0, 0),
(2, 'Angular Webinar', 'Alex', 0, 0),
(3, 'Angular Webinar', 'Boris', 0, 0),
(4, 'Angular Webinar', 'Shay', 0, 0),
(5, 'Angular Webinar', 'Izik', 0, 0),
(6, 'Angular Webinar', 'Moshe', 0, 0),
(7, 'Angular Webinar', 'Michael', 0, 0),
(8, 'Angular Webinar', 'Lavi', 0, 0),
(9, 'Angular Webinar', 'Dan', 0, 0),
(10, 'Angular Webinar', 'Anatoly', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
