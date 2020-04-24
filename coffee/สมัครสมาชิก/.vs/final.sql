-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 24, 2020 at 10:37 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `CustomerID` int(11) NOT NULL,
  `CustomerName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Gender` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CustomerType` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CustomerTelNo` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`CustomerID`, `CustomerName`, `Password`, `Gender`, `CustomerType`, `CustomerTelNo`) VALUES
(6, 'Sanayut', '12345678', 'Female', 'Member', '0962439665'),
(7, 'bb', '12345', 'Male', 'Member', '0888'),
(10, 'nalinpat', '0210', 'Female', 'Member', '0630588299'),
(11, 'ddd', 'dddd', 'Male', 'Member', '00000d'),
(12, 'art', '123', 'Male', 'Member', '06666'),
(13, 'ploy', '0123', 'Female', 'Member', '0630588299');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `ProductName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Price` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Type` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Url` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductName`, `Price`, `Type`, `Url`) VALUES
(3, 'Iced cafe Americano', '60', 'เย็น', 'https://drive.google.com/uc?id=1eMbBsqGPmWCtA8w1-tky4MVs0oKJWb-d'),
(4, 'Iced cafe Cappuccino', '65', 'เย็น', 'https://drive.google.com/uc?id=1ICmWYVIxnsqAdlD-vr_2DygxKl6FGIXh'),
(5, 'Iced cafe Coffee ', '50', 'เย็น', 'https://drive.google.com/uc?id=1zlHrrG6EBqK_oKCfWhyS5wR5q2Ay387S'),
(6, 'Iced cafe Mocha', '70', 'เย็น', 'https://drive.google.com/uc?id=1BrbZJsvxxMBvzxB2p-YIVsDwR-7Wv7dE'),
(7, 'Iced cafe latte', '65', 'เย็น', 'https://drive.google.com/uc?id=1ofQlgyC45u68BbERPCmzKrq5IEy2loJb'),
(8, 'Cober Smoothie', '110', 'ปั่น', 'https://drive.google.com/uc?id=13c3MPqO80NhxGCTfm-btXzYncy8JKSlr'),
(9, 'Double Choc Chip Frappe', '95', 'ปั่น', 'https://drive.google.com/uc?id=1TYtIAUyM82LRkKY1OmoKpNQgbv1kjF52 '),
(10, 'Matcha Green Tea Smoothie', '85', 'ปั่น', 'https://drive.google.com/uc?id=1aHA160ZBZW4PRF2YJQPsTc5b9DIh7VH5'),
(11, 'Stawberry Milk Shake ', '90', 'ปั่น', 'https://drive.google.com/uc?id=1cuzvH428bnxXQYUlQfYRGoejaDd6s62P'),
(12, 'Thai Milk Tea Freppe', '105', 'ปั่น', 'https://drive.google.com/uc?id=1lRq8X8aQAYMlREI1YIQBJmg_pwfefRGu'),
(13, 'Chocolate brownie', '89', 'ขนม', 'https://drive.google.com/uc?id=1l9n0UDglXiKGwzMvUkE9WGyl2WS0Blr5'),
(14, 'Cookies', '45', 'ขนม', 'https://drive.google.com/uc?id=1TbStrCSxYAnpiosBYUxK3wQLNhnr5vTA'),
(15, 'Cream pastry sweet white', '55', 'ขนม', 'https://drive.google.com/uc?id=17G2VEqnguMGDfBqyt_XfSL8HhA1q6oV2'),
(16, 'Egg tart', '30', 'ขนม', 'https://drive.google.com/uc?id=1spE8Ql0iEuG-z3XMUY02kHI8dSnyrrcv'),
(17, 'Honey toast', '179', 'ขนม', 'https://drive.google.com/uc?id=1-jXQ0V1bcPdt4RgfEXZgCxCTZ-BngLqU'),
(18, 'Waffle', '59', 'ขนม', 'https://drive.google.com/uc?id=1WW-cEVqAJxITvFG425WNsm45RDVoszsS'),
(19, 'Americano', '55', 'ร้อน', 'https://drive.google.com/uc?id=1OiuTKA5YnD2Cq-eRimf62MYFE8feeCdx'),
(20, 'Cafe Latte', '55', 'ร้อน', 'https://drive.google.com/uc?id=1WKu1rW98AgV0ju1dnanVQRDO0wHFzFOC'),
(21, 'Cappuccino', '105', 'ร้อน', 'https://drive.google.com/uc?id=1aWcGBFoD3Ku74BAoN8l3Oezq3dA2LaeH'),
(22, 'Caramel Macchiato', '55', 'ร้อน', 'https://drive.google.com/uc?id=1AGpRN3gLb6BKSVbkgtkQgmzT09z1WR89'),
(23, 'Hot Chocolate', '65', 'ร้อน', 'https://drive.google.com/uc?id=1ru57WYB7DM2LNBWG2keejjBZ7FVBl9I1'),
(24, 'Hot Green tea Latte', '75', 'ร้อน', 'https://drive.google.com/uc?id=1MiGldnd9qpAUYvkEmuqGW-48mPzKI5_S'),
(25, '', '', '', 'https://drive.google.com/uc?id=');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `SaleID` int(11) NOT NULL,
  `SaleDateTime` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `CustomerID` int(11) NOT NULL,
  `StaffID` int(11) NOT NULL,
  `No_table` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `CheckBill` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`SaleID`, `SaleDateTime`, `CustomerID`, `StaffID`, `No_table`, `CheckBill`) VALUES
(61, '2020/04/23;23:58:29', 12, 0, '1', '');

-- --------------------------------------------------------

--
-- Table structure for table `sale_details`
--

CREATE TABLE `sale_details` (
  `SaleDetailID` int(11) NOT NULL,
  `SaleID` int(11) NOT NULL,
  `ProductName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ProductID` int(11) NOT NULL,
  `Price` float NOT NULL,
  `CheckOrder` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sale_details`
--

INSERT INTO `sale_details` (`SaleDetailID`, `SaleID`, `ProductName`, `ProductID`, `Price`, `CheckOrder`) VALUES
(103, 61, 'Iced cafe Cappuccino', 4, 65, ''),
(104, 61, 'Iced cafe Coffee ', 5, 50, ''),
(105, 61, 'Iced cafe Mocha', 6, 70, ''),
(106, 61, 'Iced cafe Coffee ', 5, 50, '');

-- --------------------------------------------------------

--
-- Table structure for table `staffs`
--

CREATE TABLE `staffs` (
  `StaffID` int(11) NOT NULL,
  `StaffName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Gender` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `StaffPassword` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `StaffLevel` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `staffs`
--

INSERT INTO `staffs` (`StaffID`, `StaffName`, `Gender`, `StaffPassword`, `StaffLevel`) VALUES
(16, 'art', 'Male', '123', 'Staff'),
(17, 'Oommie', 'Male', '123456', 'Staff'),
(18, 'admin', 'Male', '1234', 'Admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`CustomerID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`SaleID`);

--
-- Indexes for table `sale_details`
--
ALTER TABLE `sale_details`
  ADD PRIMARY KEY (`SaleDetailID`);

--
-- Indexes for table `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`StaffID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `SaleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `sale_details`
--
ALTER TABLE `sale_details`
  MODIFY `SaleDetailID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `staffs`
--
ALTER TABLE `staffs`
  MODIFY `StaffID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
