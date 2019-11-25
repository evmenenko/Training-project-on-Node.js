DROP DATABASE IF EXISTS `online_cinema_db`;
CREATE DATABASE `online_cinema_db` DEFAULT CHARACTER SET utf8;

USE `online_cinema_db`;

 CREATE TABLE `users` (
	`id`			SERIAL			PRIMARY KEY,
	`login`			VARCHAR(100)	NOT NULL UNIQUE,
	`password`		VARCHAR(30)		NOT NULL,
	`first_name`	VARCHAR(255)	NOT NULL,
	`last_name`		VARCHAR(255)	NOT NULL,
	`email`			VARCHAR(100)	NOT NULL UNIQUE,
	`deleted`		BOOLEAN			NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `roles` (
	`id`		SERIAL			PRIMARY KEY,
	`name`		VARCHAR(100)	NOT NULL,
	`deleted`	BOOLEAN			NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `roles_users` (
	`id`		SERIAL	PRIMARY KEY,
	`user_id`	INTEGER NOT NULL,
	`role_id`	INTEGER NOT NULL,
	`deleted`	BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `access_restrictions` (
	`id`		SERIAL			PRIMARY KEY,
	`role_id`	INTEGER			NOT NULL,
	`url`		VARCHAR(2048)	NOT NULL,
	`deleted`	BOOLEAN			NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `requests` (
	`id`		SERIAL	PRIMARY KEY,
	`user_id`	INTEGER NOT NULL,
	`deleted`	BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `tickets` (
	`id`			SERIAL	PRIMARY KEY,
	`user_id`		INTEGER NOT NULL,
	`display_id` 	INTEGER NOT NULL,
	`deleted`		BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `displays` (
	`id`			SERIAL		PRIMARY KEY,
	`movie_id`		INTEGER		NOT NULL,
	`start_date`	TIMESTAMP	NOT NULL,
	`end_date`		TIMESTAMP	NOT NULL,
	`deleted`		BOOLEAN		NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `movies` (
	`id`			SERIAL			PRIMARY KEY,
	`name`			VARCHAR(255)	NOT NULL,
	`description`	TEXT			,
	`image`			VARCHAR(260)	NOT NULL,
	`deleted`		BOOLEAN			NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `tags` (
	`id`		SERIAL			PRIMARY KEY,
	`name`		VARCHAR(100)	NOT NULL,
	`deleted`	BOOLEAN			NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

CREATE TABLE `tags_movies` (
	`id`		SERIAL	PRIMARY KEY,
	`tag_id`	INTEGER NOT NULL,
	`movie_id`	INTEGER NOT NULL,
	`deleted`	BOOLEAN NOT NULL DEFAULT FALSE
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;
