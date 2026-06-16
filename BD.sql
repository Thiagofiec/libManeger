
create database if not exists libManager;

use libManager;

create table if not exists Usuario(
    id_usuario int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(255) not null unique,
    telefone varchar(14) not null unique,
    cpf char(11) not null unique,
    senha_hash varchar(255) not null, 
    tipo tinyint not null, --0 = user , 1 = admin--
    ativo tinyint not null --1 = ativo, 0 = desativado-- 
);

create table if not exists livro(
    id_livro int auto_increment primary key,
    titulo varchar(255) not null,
    autor varchar(255) not null,
    lancamento date not null,
    disponivel tinyint not null,
    ativo tinyint not null
);

create table if not exists emprestimo(
    id int auto_increment primary key, 
    data_emprestimo date default (current_date),
    concluido tinyint not null, --0 = nao, 1 = sim--
    id_usuario int not null,
    id_livro int not null,
    foreign key (id_usuario) references Usuario(id_usuario),
    foreign key (id_livro) references livro(id_livro)
);