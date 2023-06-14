-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/
create database tmblog;

use tmblog;

create table usuario(
iduser int primary key auto_increment,
nome varchar(45), 
email varchar(50),
senha char(8) 
);

insert into usuario values
(null, 'maria paula', 'maria@gmail.com', 'maria123'),
(null, 'sarah', 'saraH@gmail.com', 'sariss04'),
(null, 'gyulia', 'gyulia@gmail.com', 'gyulia11');
(null, 'bianca', 'biancA@gmail.com', 'bianca05');


select * from usuario;


create table preQuiz(
fkusuario int,
tempo int,
constraint fkusuario foreign key (fkusuario) references usuario(iduser)
);

insert into preQuiz values
(1, 15),
(2, 25),
(3, 6),
(4, 8);

create table resultadoFinal(
idResultado int primary key auto_increment,
acertos int,
erros int,
fkuser int,
constraint fkuser foreign key (fkuser)
references usuario (iduser)
);

select * from preQuiz;


