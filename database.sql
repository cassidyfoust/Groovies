
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "group" (
	"id" SERIAL PRIMARY KEY,
	"group_name" VARCHAR (80) UNIQUE NOT NULL,
    "admin" INT REFERENCES "user"
	);
	
CREATE TABLE "user_group" (
	"id" SERIAL PRIMARY KEY,
	"group_id" INT REFERENCES "group",
	"user_id" INT REFERENCES "user");

CREATE TABLE "genres"
(
	"id" SERIAL PRIMARY KEY,
	"genre_name" VARCHAR (80) UNIQUE NOT NULL,
	"tmdb" INT);

INSERT INTO "genres" ("genre_name", "tmdb") VALUES ("Action", 28), ("Adventure", 12), ("Animation", 16),
("Comedy", 35), ("Crime", 80), ("Documentary", 99), ("Drama", 18), ("Family", 10751), ("Fantasy", 14), ("History", 36),
("Horror", 27), ("Music", 10402), ("Mystery", 9648), ("Romance", 10749), ("Science Fiction", 878), ("TV Movie", 10770),
("Thriller", 53), ("War", 10752), ("Western", 37);

CREATE TABLE "user_genres"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "genre_id" INT REFERENCES "genres",
    "like" boolean
);

CREATE TABLE "group_genres"
(
    "id" SERIAL PRIMARY KEY,
    "group_id" INT REFERENCES "group",
    "genre_id" INT REFERENCES "genres",
    "like" boolean
);

CREATE TABLE "movies"
(
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR,
    "description" VARCHAR,
    "poster_path" VARCHAR
);

CREATE TABLE "user_movies"
(
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "movie_id" INT REFERENCES "movies"
);


CREATE TABLE "group_movies"
(
    "id" SERIAL PRIMARY KEY,
    "group_id" INT REFERENCES "group",
    "movie_id" INT REFERENCES "movies"
);