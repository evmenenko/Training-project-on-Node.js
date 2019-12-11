USE `online_cinema_db`;

INSERT INTO `roles`
(`id`, `name`)
VALUES
(1, "admin"),
(2, "user");

INSERT INTO `users`
(`id`, `login`, `first_name`, `last_name`, `password`, `email`)
VALUES
(1, "Tk321", "Артур", "Евмененко", "admin", "arthur.evmenenko@gmail.com");

INSERT INTO `users_roles`
(`id`, `user_id`, `role_id`)
VALUES
(1, 1, 1),
(2, 1, 2);
