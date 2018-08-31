DELETE FROM posts
WHERE post_id = ${id};

SELECT * FROM posts
ORDER BY date DESC;