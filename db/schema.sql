-- create database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- declare which table to use
USE burgers_db;

-- create table
CREATE TABLE burgers(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(25),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
