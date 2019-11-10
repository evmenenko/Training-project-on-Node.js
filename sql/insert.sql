INSERT INTO `roles`
(`id`, `name`)
VALUES
(0, "regular user"),
(1, "administrator");

INSERT INTO `users`
(`login`, `first_name`, `last_name`, `password`, `email`, `role`)
VALUES
("admin", "Артур", "Евмененко", "admin", "arthur.evmenenko@gmail.com", 1);
