CREATE DATABASE  IF NOT EXISTS `pharmacy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pharmacy`;
-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pharmacy
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `client` (
  `AHN` int(11) NOT NULL,
  `birthdate` varchar(45) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `minit` varchar(45) DEFAULT NULL,
  `lname` varchar(45) NOT NULL,
  `ICName` varchar(45) NOT NULL,
  `clientuser` varchar(45) NOT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`AHN`),
  KEY `fk_username_idx` (`clientuser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (12212,'2/2/2006','curtis','g','wagen','ensure me','curt','8908tg jhx'),(88888,'9/9/2010','yuh','p','pendi','99999','yuhh','123 st'),(444333,'9/30/2001','nav','j','brarjot','809080','nav','5453 ave'),(30032005,'2/18/2005','anvet','k','gill','NULL','abnoot','32 dr');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (111,'sun life'),(112,'ensure me'),(113,'desi'),(114,'pray');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `drugs`
--

DROP TABLE IF EXISTS `drugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `drugs` (
  `drugid` int(11) NOT NULL,
  `drugName` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `expiryYear` int(11) NOT NULL,
  `expiryMonth` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drugs`
--

LOCK TABLES `drugs` WRITE;
/*!40000 ALTER TABLE `drugs` DISABLE KEYS */;
INSERT INTO `drugs` VALUES (1,'Aspirin',12.99,2020,8,22,'Pill'),(2,'Tylenol',11,2021,2,1021,'Syrup'),(88,'crack cocaine',88.99,9020,9,47201,'Chewable'),(999,'jjs ass',12.2,1010,9,299,'Spray'),(9090,'jaya drug',88.22,9090,9,109,'Ointment');
/*!40000 ALTER TABLE `drugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `healthrecords`
--

DROP TABLE IF EXISTS `healthrecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `healthrecords` (
  `healthid` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `allergy` varchar(45) NOT NULL,
  `condition` varchar(45) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`healthid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `healthrecords`
--

LOCK TABLES `healthrecords` WRITE;
/*!40000 ALTER TABLE `healthrecords` DISABLE KEYS */;
INSERT INTO `healthrecords` VALUES (1,'abnoot','men','overweight',33);
/*!40000 ALTER TABLE `healthrecords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `orderid` int(11) NOT NULL,
  `drugid` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `drugname` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `drugprice` double NOT NULL,
  `clientUsername` varchar(45) NOT NULL,
  PRIMARY KEY (`orderid`),
  KEY `fk_drug_idx` (`drugid`),
  KEY `fk_client_idx` (`clientUsername`),
  CONSTRAINT `fk_client` FOREIGN KEY (`clientUsername`) REFERENCES `users` (`username`),
  CONSTRAINT `fk_drug` FOREIGN KEY (`drugid`) REFERENCES `drugs` (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,88,1000,'crack cocaine',0,88.99,'abnoot'),(2,1,200,'Tylenol',0,11,'nav'),(3,999,100,'jjs ass',1,12.2,'abnoot'),(4,9090,800,'jaya drug',0,88.22,'abnoot'),(5,88,2233,'crack cocaine',0,88.99,'abnoot'),(6,2,100,'Tylenol',1,11,'abnoot'),(7,1,23432,'Aspirin',1,12.99,'abnoot'),(8,88,666,'crack cocaine',0,88.99,'abnoot'),(9,88,666,'crack cocaine',0,88.99,'curt');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `prescriptions` (
  `prescripId` int(11) NOT NULL,
  `clientUsername` varchar(45) NOT NULL,
  `drugid` int(11) NOT NULL,
  PRIMARY KEY (`prescripId`),
  KEY `clientUsername_idx` (`clientUsername`),
  KEY `drugid_idx` (`drugid`),
  CONSTRAINT `clientUsername` FOREIGN KEY (`clientUsername`) REFERENCES `client` (`clientuser`),
  CONSTRAINT `drugid` FOREIGN KEY (`drugid`) REFERENCES `drugs` (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
INSERT INTO `prescriptions` VALUES (2,'abnoot',1),(3,'abnoot',88),(6,'abnoot',2),(7,'curt',88);
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('abnoot','1111','client'),('curt','1','client'),('kelvin','9000','driver'),('nav','1111','client'),('Rahman','8002','pharma'),('yuhh','0000','client');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-06  0:56:28
