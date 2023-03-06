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


--todo category 
    CREATE TABLE todoCategory (
 id INT unsigned auto_increment,
 name VARCHAR(255),
 PRIMARY KEY (id)
    );

    -- todo
    CREATE TABLE todo (
        id INT unsigned auto_increment,
        name VARCHAR(255),
        isDone BOOLEAN DEFAULT false, 
        todoCategoryId int UNSIGNED,
        PRIMARY KEY (id),
        FOREIGN KEY (todoCategoryId) REFERENCES todoCategory (id)
    );

    insert INTO todoCategory VALUES (NULL, 'Must do');

    insert into todo values (NULL,'Brush teeth',false,1);