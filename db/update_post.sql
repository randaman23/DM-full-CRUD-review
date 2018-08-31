UPDATE posts
SET caption = ${caption}
WHERE post_id = ${id};

SELECT * FROM posts
ORDER BY date DESC;


