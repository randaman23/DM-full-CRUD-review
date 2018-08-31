DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email VARCHAR(50),
  image TEXT
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  image TEXT,
  caption VARCHAR(250),
  date TIMESTAMP
);