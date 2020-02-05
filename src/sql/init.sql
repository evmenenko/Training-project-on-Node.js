DROP DATABASE IF EXISTS `online_cinema_db`;
CREATE DATABASE `online_cinema_db` DEFAULT CHARACTER SET UTF8MB4;

USE `online_cinema_db`;

 CREATE TABLE `users` (
	`id`			INTEGER			AUTO_INCREMENT AUTO_INCREMENT PRIMARY KEY,
	`login`			VARCHAR(100)	NOT NULL UNIQUE,
	`password`		VARCHAR(300)	NOT NULL,
	`first_name`	VARCHAR(255)	NOT NULL,
	`last_name`		VARCHAR(255)	NOT NULL,
	`email`			VARCHAR(100)	NOT NULL UNIQUE,
	`deleted_date`	DATETIME		
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `roles` (
	`id`			INTEGER			AUTO_INCREMENT PRIMARY KEY,
	`name`			VARCHAR(100)	NOT NULL,
	`deleted_date`	DATETIME		
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `users_roles` (
	`id`			INTEGER		AUTO_INCREMENT PRIMARY KEY,
	`user_id`		INTEGER 	NOT NULL,
	`role_id`		INTEGER 	NOT NULL,
	`deleted_date`	DATETIME	
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `requests` (
	`id`			INTEGER		AUTO_INCREMENT PRIMARY KEY,
	`user_id`		INTEGER 	NOT NULL,
	`deleted_date`	DATETIME	
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `tickets` (
	`id`				INTEGER		AUTO_INCREMENT PRIMARY KEY,
	`user_id`			INTEGER 	NOT NULL,
	`display_id` 		INTEGER 	NOT NULL,
	`deleted_date`		DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `displays` (
	`id`				INTEGER		AUTO_INCREMENT PRIMARY KEY,
	`movie_id`			INTEGER		NOT NULL,
	`start_date`		DATETIME	NOT NULL,
	`end_date`			DATETIME	NOT NULL,
	`deleted_date`		DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `movies` (
	`id`				INTEGER			AUTO_INCREMENT PRIMARY KEY,
	`name`				VARCHAR(255)	NOT NULL,
	`description`		TEXT			,
	`preview_url`		VARCHAR(2048)	NOT NULL,
	`deleted_date`		DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `tags` (
	`id`			INTEGER			AUTO_INCREMENT PRIMARY KEY,
	`name`			VARCHAR(100)	NOT NULL,
	`deleted_date`	DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE `tags_movies` (
	`id`			INTEGER		AUTO_INCREMENT PRIMARY KEY,
	`tag_id`		INTEGER		NOT NULL,
	`movie_id`		INTEGER		NOT NULL,
	`deleted_date`	DATETIME
) ENGINE=INNODB DEFAULT CHARACTER SET UTF8MB4;
