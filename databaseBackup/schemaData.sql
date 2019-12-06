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
-- Table structure for table `chewable`
--

DROP TABLE IF EXISTS `chewable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chewable` (
  `id` int(11) NOT NULL,
  `flavor` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chewable`
--

LOCK TABLES `chewable` WRITE;
/*!40000 ALTER TABLE `chewable` DISABLE KEYS */;
INSERT INTO `chewable` VALUES (1231,'large');
/*!40000 ALTER TABLE `chewable` ENABLE KEYS */;
UNLOCK TABLES;

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
  `docId` int(11) NOT NULL,
  PRIMARY KEY (`AHN`),
  KEY `fk_username_idx` (`clientuser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (88888,'9/9/2010','yuh','p','pendi','sun life','yuhh','123 st',1001),(444333,'9/30/2001','nav','j','brarjot','809080','nav','5453 ave',1),(30032005,'2/18/2005','anvet','k','gill','sun life','abnoot','32 dr',1001);
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
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `doctors` (
  `docId` int(11) NOT NULL,
  `docUsername` varchar(45) NOT NULL,
  `docPassword` varchar(45) NOT NULL,
  PRIMARY KEY (`docId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1001,'Gill','1'),(1002,'Tran','1'),(1003,'Rahman','1');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
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
INSERT INTO `drugs` VALUES (1,'Aspirin',12.99,2020,8,910,'Pill'),(2,'Tylenol',11,2021,2,1021,'Syrup'),(88,'Advil',88.99,9020,9,89,'Chewable'),(999,'Cough Syrup',12.2,1010,9,199,'Spray'),(9090,'Cannabis',88.22,9090,9,98897,'Ointment'),(32123,'hello',123,123123,3,213123,'Pill'),(213123,'betch',123123,31231,3,123123,'Syrup');
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
INSERT INTO `healthrecords` VALUES (1,'abnoot','men','overweight',33),(2,'abnoot','wheat','cancer',33);
/*!40000 ALTER TABLE `healthrecords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ointment`
--

DROP TABLE IF EXISTS `ointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ointment` (
  `drugid` int(11) NOT NULL,
  `concentration` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ointment`
--

LOCK TABLES `ointment` WRITE;
/*!40000 ALTER TABLE `ointment` DISABLE KEYS */;
INSERT INTO `ointment` VALUES (234,'random'),(2345,'random');
/*!40000 ALTER TABLE `ointment` ENABLE KEYS */;
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
INSERT INTO `orders` VALUES (1,9090,100,'cannabis',0,88.22,'abnoot'),(2,9090,121212,'Cannabis',0,88.22,'abnoot'),(3,1,1212,'Aspirin',2,12.99,'yuhh');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pharmacists`
--

DROP TABLE IF EXISTS `pharmacists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pharmacists` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `university` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `pharmaUsername_idx` (`username`),
  CONSTRAINT `pharmaUsername` FOREIGN KEY (`username`) REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pharmacists`
--

LOCK TABLES `pharmacists` WRITE;
/*!40000 ALTER TABLE `pharmacists` DISABLE KEYS */;
INSERT INTO `pharmacists` VALUES (1,'Rahman','Clown College');
/*!40000 ALTER TABLE `pharmacists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pill`
--

DROP TABLE IF EXISTS `pill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pill` (
  `drugid` int(11) NOT NULL,
  `size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pill`
--

LOCK TABLES `pill` WRITE;
/*!40000 ALTER TABLE `pill` DISABLE KEYS */;
INSERT INTO `pill` VALUES (231,'large'),(525,'random');
/*!40000 ALTER TABLE `pill` ENABLE KEYS */;
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
INSERT INTO `prescriptions` VALUES (1,'abnoot',9090),(2,'yuhh',9090),(3,'yuhh',1);
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spray`
--

DROP TABLE IF EXISTS `spray`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `spray` (
  `drugid` int(11) NOT NULL,
  `intensity` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spray`
--

LOCK TABLES `spray` WRITE;
/*!40000 ALTER TABLE `spray` DISABLE KEYS */;
INSERT INTO `spray` VALUES (7555,'random');
/*!40000 ALTER TABLE `spray` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `syrup`
--

DROP TABLE IF EXISTS `syrup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `syrup` (
  `drugid` int(11) NOT NULL,
  `flavor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`drugid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `syrup`
--

LOCK TABLES `syrup` WRITE;
/*!40000 ALTER TABLE `syrup` DISABLE KEYS */;
INSERT INTO `syrup` VALUES (9009,'random'),(234567654,'large');
/*!40000 ALTER TABLE `syrup` ENABLE KEYS */;
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
INSERT INTO `users` VALUES ('abnoot','1111','client'),('bha','1','client'),('binduu','1','client'),('Gill','1','doctor'),('guh','1','client'),('heu','111','client'),('kelvin','9000','driver'),('nav','1111','client'),('Rahman','8002','pharma'),('yuhh','0000','client');
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

-- Dump completed on 2019-12-06 12:13:14
