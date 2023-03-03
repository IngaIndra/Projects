 CREATE TABLE category (
    id INT auto_increment,
    name VARCHAR(255),
    slug VARCHAR(255) UNIQUE,
    description TEXT, 
    productCount INT UNSIGNED DEFAULT 0,
    createdAt datetime, 
    PRIMARY KEY (id)
    ->     );



create table products (
    id INT not null auto_increment,
    name varchar(255), 
    slug VARCHAR(255), 
    image VARCHAR(500), 
    productCount int unsigned default 0,
    createdAt datetime, 
    PRIMARY KEY (id)
    );