/* таблица пользователи */
ALTER TABLE users
    ADD CONSTRAINT FK_users_to_roles FOREIGN KEY(role) REFERENCES roles(id);

/* таблица запросы */
ALTER TABLE requests
    ADD CONSTRAINT FK_requests_to_users FOREIGN KEY(user_id) REFERENCES users(id);

/* таблица показы */
ALTER TABLE displays
    ADD CONSTRAINT FK_displays_to_movies FOREIGN KEY(movie_id) REFERENCES movies(id);

/* таблица показы */
ALTER TABLE tickets
    ADD CONSTRAINT FK_tickets_to_users FOREIGN KEY(user_id) REFERENCES users(id),
        ADD CONSTRAINT FK_tickets_to_displays FOREIGN KEY(display_id) REFERENCES displays(id);

/* таблица для связи тэгов и фильмов */
ALTER TABLE tags_vs_movies
    ADD CONSTRAINT FK_tags_vs_movies_to_tags FOREIGN KEY(tag_id) REFERENCES tags(id),
        ADD CONSTRAINT FK_tags_vs_movies_to_movies FOREIGN KEY(movie_id) REFERENCES movies(id);
