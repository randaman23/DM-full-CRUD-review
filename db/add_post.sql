INSERT INTO posts(user_id, image, caption, date)
VALUES(1, ${image}, ${caption}, NOW());

SELECT * FROM posts
ORDER BY date DESC;