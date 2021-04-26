CREATE TABLE utilisateur_publisher(
	id serial PRIMARY KEY ,
	utilisateur_id serial,
	publisher_id serial,
	FOREIGN KEY (utilisateur_id)
    REFERENCES utilisateurs(id)
    ON DELETE CASCADE,
	FOREIGN KEY (publisher_id)
    REFERENCES publishers(id)
    ON DELETE CASCADE
);