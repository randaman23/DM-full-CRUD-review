DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(40),
  password VARCHAR(40),
  image TEXT
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  image TEXT,
  caption VARCHAR(250),
  date TIMESTAMP
);