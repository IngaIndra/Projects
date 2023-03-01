insert into employees (emp_no, birth_date, first_name, last_name, gender, hire_date) values 
    (1, '2005-08-10', 'Sedee', 'Odgerel', 'M', '2022-11-01'), (2, '2003-01-30', 'Dalai', 'B', 'F', '2022-11-01'), (3, '1999-11-12', 'Indra', 'U', 'F', '2022-11-01');



    create table user (
        id int auto_increment,
        phone int unique,
        email varchar(255) unique,
        primary key (id)
    );

    