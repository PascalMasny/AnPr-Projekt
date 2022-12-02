CREATE DATABASE WarpShop DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
USE WarpShop;


CREATE TABLE Customer (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fName VARCHAR(255),
    lName VARCHAR(255),
    bDate DATE,
    custSince DATE,
    eMail VARCHAR(255),
    street VARCHAR(255),
    hsnr VARCHAR(5),
    plz INT,
    city VARCHAR(20),
    gender CHARACTER,
    buLa VARCHAR(30),
    tel VARCHAR(11)
);


CREATE TABLE CustOrder(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CustomerId INT,
    FOREIGN KEY (CustomerId) REFERENCES Customer(ID),
    OrderDate DATE
);






CREATE TABLE Product (
    ID INT PRIMARY KEY,
    name TEXT,
    ModelNumber INT,
    gewicht VARCHAR(32),
    groesse VARCHAR(32)
);


CREATE TABLE ProductPrice (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fromDate DATE,
    ProductId INT,
    FOREIGN KEY (ProductId) REFERENCES Product(ID),
    Price DECIMAL(8,2)
);


CREATE TABLE Images(
    ProductId INT,
    FOREIGN KEY (ProductId) REFERENCES Product(ID),
    name VARCHAR(255)
);


CREATE TABLE ProdInfo(
    ProductId INT,
    FOREIGN KEY (ProductId) REFERENCES Product(ID),
    info VARCHAR(255)
);


CREATE TABLE TecSpec(
    ProductId INT,
   FOREIGN KEY (ProductId) REFERENCES Product(ID),
   tecSpec VARCHAR(255)
);


CREATE TABLE Spec(
    ProductId INT,
    FOREIGN KEY (ProductId) REFERENCES Product(ID),
    spec VARCHAR(255)
);



CREATE TABLE Categories(
    ProductId INT,
    FOREIGN KEY (ProductId) REFERENCES Product(ID),
    category VARCHAR(255)
);




CREATE TABLE OrderElement(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CustOrder INT,
    FOREIGN KEY (CustOrder) REFERENCES CustOrder(ID),
    Quantity INT
);