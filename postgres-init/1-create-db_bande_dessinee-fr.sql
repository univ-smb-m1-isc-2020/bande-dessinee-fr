CREATE USER bande_dessinee_fr_root WITH PASSWORD 'toor' CREATEDB;
CREATE DATABASE db_bande_dessinee_fr
    WITH 
    OWNER = bande_dessinee_fr_root
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;