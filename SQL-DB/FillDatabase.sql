
LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/Customer.csv' 
INTO TABLE Customer 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ID, fName, lName, bDate, custSince, eMail, street, hsnr, plz, city, gender, buLa, tel);


LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/CustOrder.csv' 
INTO TABLE CustOrder 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ID, CustomerId, OrderDate);




LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/Product.csv' 
INTO TABLE Product 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ID, name, ModelNumber, gewicht, groesse);


LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/ProductPrice.csv' 
INTO TABLE ProductPrice 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(fromDate, ProductId, Price);


LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/Images.csv' 
INTO TABLE Images 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ProductId, name);


LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/ProdInfo.csv' 
INTO TABLE ProdInfo 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ProductID, info);


LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/TecSpec.csv' 
INTO TABLE TecSpec 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ProductID, tecSpec);


LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/Spec.csv' 
INTO TABLE Spec 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ProductID, spec);



LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/Categories.csv' 
INTO TABLE Categories 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ProductID, category);



LOAD DATA INFILE 'C:/Users/masnypas/Desktop/AnPr-Projekt/00_material/OrderElement.csv' 
INTO TABLE OrderElement 
FIELDS TERMINATED BY '|'
LINES TERMINATED BY '\r\n'
(ID, CustOrder, Quantity);


















