USE `online_cinema_db`;

/* связи для таблицы users_roles */
ALTER TABLE `users_roles`

	ADD
	CONSTRAINT `users_roles_vs_users`
	FOREIGN KEY (`user_id`)
	REFERENCES `users`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
	,

	ADD
	CONSTRAINT `users_roles_vs_roles`
	FOREIGN KEY (`role_id`)
	REFERENCES `roles`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


/* связи для таблицы access_restrictions */
ALTER TABLE `access_restrictions`

	ADD
	CONSTRAINT `access_restrictions_vs_roles`
	FOREIGN KEY (`role_id`)
	REFERENCES `roles`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
	,

	ADD
	CONSTRAINT `access_restrictions_vs_urls`
	FOREIGN KEY (`url_id`)
	REFERENCES `urls`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


/* связи для таблицы requests */
ALTER TABLE `requests`

	ADD CONSTRAINT `requests_vs_users`
	FOREIGN KEY (`user_id`)
	REFERENCES `users`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


/* связи для таблицы tickets */
ALTER TABLE `tickets`

	ADD
	CONSTRAINT `tickets_vs_users`
	FOREIGN KEY (`user_id`)
	REFERENCES `users`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
	,

	ADD
	CONSTRAINT `tickets_vs_displays`
	FOREIGN KEY (`display_id`)
	REFERENCES `displays`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


/* связи для таблицы displays */
ALTER TABLE `displays`

	ADD
	CONSTRAINT `displays_vs_movies`
	FOREIGN KEY (`movie_id`)
	REFERENCES `movies`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;


/* связи для таблицы tags_movies */
ALTER TABLE `tags_movies`

	ADD
	CONSTRAINT `tags_movies_vs_tags`
	FOREIGN KEY (`tag_id`)
	REFERENCES `tags`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
	,

	ADD
	CONSTRAINT `tags_movies_vs_movies`
	FOREIGN KEY (`movie_id`)
	REFERENCES `movies`(`id`)
	ON UPDATE RESTRICT
	ON DELETE RESTRICT
;