CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INTEGER AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45),
price INTEGER(10),
stock_quantity INTEGER(10)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Oranges(case)","Produce", 25, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Doritos","Snacks", 5, 123);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Shaving Cream","Cosmetics", 9, 37);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Cheetos","Snacks", 4, 97);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Bananas(bunch)","Produce", 4, 57);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Eyeshadow","Cosmetics",13,54);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Pistachios","Snacks", 8, 42);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Water Bottles(case)","Beverages", 6, 258);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Mangoes (case)","Produce", 32, 23);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Headphones","Electronics", 15, 27);

SELECT*FROM products;