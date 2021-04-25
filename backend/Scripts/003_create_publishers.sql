CREATE TABLE publishers(
	id serial PRIMARY KEY ,
	name VARCHAR(256) ,
	image VARCHAR(256) ,
	deck VARCHAR(8000) ,
	description VARCHAR(8000)
);