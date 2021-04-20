CREATE TABLE utilisateur (
	user_id serial PRIMARY KEY,
	nom VARCHAR ( 50 ) NOT NULL,
	prenom VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	motdepasse VARCHAR ( 255 ) NOT NULL
);

DROP TABLE utilisateur;