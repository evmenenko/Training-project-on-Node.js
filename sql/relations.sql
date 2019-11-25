/* связи для таблицы roles_users */
ALTER TABLE `roles_users`

	ADD 
	CONSTRAINT `roles_users_vs_users`
	FOREIGN KEY (`user_id`)
	REFERENCES `users`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE,

	ADD
	CONSTRAINT `roles_users_vs_roles`
	FOREIGN KEY (`role_id`)
	REFERENCES `roles`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE;


/* связи для таблицы access_restrictions */
ALTER TABLE `access_restrictions`

	ADD
	CONSTRAINT `access_restrictions_vs_roles`
	FOREIGN KEY (`role_id`)
	REFERENCES `roles`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE;


/* связи для таблицы requests */
ALTER TABLE `requests`

	ADD CONSTRAINT `requests_vs_users`
	FOREIGN KEY (`user_id`)
	REFERENCES `users`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE;


/* связи для таблицы tickets */
ALTER TABLE `tickets`

	ADD
	CONSTRAINT `tickets_vs_users`
	FOREIGN KEY (`user_id`)
	REFERENCES `users`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE,

	ADD
	CONSTRAINT `tickets_vs_displays`
	FOREIGN KEY (`display_id`)
	REFERENCES `displays`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE;


/* связи для таблицы displays */
ALTER TABLE `displays`

	ADD
	CONSTRAINT `displays_vs_movies`
	FOREIGN KEY (`movie_id`)
	REFERENCES `movies`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE;


/* связи для таблицы tags_movies */
ALTER TABLE `tags_movies`

	ADD
	CONSTRAINT `tags_movies_vs_tags`
	FOREIGN KEY (`tag_id`)
	REFERENCES `tags`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE,

	ADD
	CONSTRAINT `tags_movies_vs_movies`
	FOREIGN KEY (`movie_id`)
	REFERENCES `movies`(`id`)
	ON UPDATE CASCADE
	ON DELETE CASCADE;