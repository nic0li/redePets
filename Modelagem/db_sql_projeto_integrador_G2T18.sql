CREATE DATABASE db_projeto_integrador_G2T18;

USE db_projeto_integrador_G2T18;

CREATE TABLE `tb_usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL UNIQUE,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_tema` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`relevancia` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tb_postagem` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`fk_usuario` INT NOT NULL,
	`fk_tema` INT NOT NULL,
	`data` DATETIME NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`conteudo` TEXT NOT NULL,
	`curtidas` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `tb_postagem` ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`fk_usuario`) REFERENCES `tb_usuario`(`id`);

ALTER TABLE `tb_postagem` ADD CONSTRAINT `fk_tema` FOREIGN KEY (`fk_tema`) REFERENCES `tb_tema`(`id`);

