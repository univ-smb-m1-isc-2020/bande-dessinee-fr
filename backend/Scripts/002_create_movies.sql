CREATE TABLE movies (
	id serial PRIMARY KEY,
    name VARCHAR ( 200 ),
    image VARCHAR ( 300 ),
    deck VARCHAR ( 8000 ),
    description VARCHAR ( 8000 ),
    release_date VARCHAR ( 50 )
);