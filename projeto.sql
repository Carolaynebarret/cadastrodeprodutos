-- MySQL Script generated by MySQL Workbench
-- Thu Apr 14 10:30:06 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

CREATE SCHEMA IF NOT EXISTS `projeto` DEFAULT CHARACTER SET utf8 ;
USE `projeto` ;

CREATE TABLE IF NOT EXISTS `projeto`.`produtos` (
  `idprodutos` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `quantidade` double  NULL,
  `preco` double  NULL,
  `prateleira` VARCHAR(45)  NULL,
  `descricao` VARCHAR(100)  NULL,
  `categoria` VARCHAR(100) NOT NULL,
   `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idprodutos`))

 



