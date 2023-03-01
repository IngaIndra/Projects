insert into employees (emp_no, birth_date, first_name, last_name, gender, hire_date) values 
    (1, '2005-08-10', 'Sedee', 'Odgerel', 'M', '2022-11-01'), (2, '2003-01-30', 'Dalai', 'B', 'F', '2022-11-01'), (3, '1999-11-12', 'Indra', 'U', 'F', '2022-11-01');



    create table user (
        id int auto_increment,
        phone int unique,
        email varchar(255) unique,
        primary key (id)
    );

    CREATE TABLE category (
        id INT auto_increment,
        name VARCHAR(255),
        slug VARCHAR(255) UNIQUE,
        description TEXT, 
        productCount INT UNSIGNED DEFAULT 0,
        createdAt datetime, 
        PRIMARY KEY (id)
    );

    insert into category (name, slug, createdAt) value (
        'Shoes', 'shoes', now()
    );

    alter table category DROP COLUMN description;

      alter table category ADD COLUMN imageUrl varchar(500);

      alter table category drop COLUMN imageUrl;

      alter table category change column imageUrl image varchar(200);