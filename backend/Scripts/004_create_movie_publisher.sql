CREATE TABLE movie_publisher(
	id serial PRIMARY KEY ,
	movie_id serial,
	publisher_id serial,
	FOREIGN KEY (publisher_id)
    REFERENCES publishers (id)
    ON DELETE CASCADE,
	FOREIGN KEY (movie_id)
    REFERENCES movies (id)
    ON DELETE CASCADE
);