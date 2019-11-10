/* удалить старую версию базы данных, если такая была */
DROP DATABASE IF EXISTS `online_cinema_db`;

/* создание базы данных */
CREATE DATABASE `online_cinema_db` DEFAULT CHARACTER SET utf8;

/* установить базу данных в качестве текущей */
USE `online_cinema_db`;

/* таблица роли */
CREATE TABLE `roles` (
    `id`                        INTEGER         NOT NULL AUTO_INCREMENT,
    `name`       	        	VARCHAR(100) 	NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
)

/* таблица пользователи */
CREATE TABLE `users` (
    `id`        		        INTEGER			NOT NULL AUTO_INCREMENT,
    `login`       	        	VARCHAR(100) 	NOT NULL UNIQUE,
    `first_name`       	        VARCHAR(100) 	NOT NULL,
    `last_name`                 VARCHAR(100)    NOT NULL,
    `password`                  VARCHAR(100)    NOT NULL,
    `email`       	        	VARCHAR(100) 	NOT NULL UNIQUE,
    `role`                      INTEGER         NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

/* таблица запросы (уточнить структуру таблицы и ее надобность в принципе) */
CREATE TABLE `requests` (
    `id`        		        INTEGER			NOT NULL AUTO_INCREMENT,
    `user_id`     	        	INTEGER      	NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

/* таблица фильмы */
CREATE TABLE `movies` (
    `id`        		        INTEGER			NOT NULL AUTO_INCREMENT,
    `name`     	        	    VARCHAR(100)    NOT NULL,
    `description`          	    TEXT	        NOT NULL,
    `picture`                   BLOB            NOT NULL,
    PRIMARY KEY (`user_id`, `display_id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

/* таблица показы */
CREATE TABLE `displays` (
    `id`        		        INTEGER			NOT NULL AUTO_INCREMENT,
    `movie_id`     	        	INTEGER      	NOT NULL,
    `display_date`   	        TIMESTAMP 	    NOT NULL,
    `cost`              	    DECIMAL	        NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

/* таблица тэги */
CREATE TABLE `tags` (
    `id`        		        INTEGER			NOT NULL AUTO_INCREMENT,
    `name`     	        	    VARCHAR(100)    NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

/* таблица для связи тэгов и фильмов */
CREATE TABLE `tags_vs_movies` (
    `movie_id`        		    INTEGER			NOT NULL,
    `tag_id`        		    INTEGER			NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;

/* таблица билеты (для связи пользователей и показов) */
CREATE TABLE `tickets` (
    `user_id`        		    INTEGER			NOT NULL,
    `display_id`        		INTEGER			NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARACTER SET utf8;
