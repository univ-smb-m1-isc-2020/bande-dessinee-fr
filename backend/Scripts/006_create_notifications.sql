CREATE TABLE notifications(
	id serial PRIMARY KEY ,
	utilisateur_id serial,
	movie_id serial,
	FOREIGN KEY (utilisateur_id)
    REFERENCES utilisateurs(id)
    ON DELETE CASCADE,
	FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE CASCADE
);