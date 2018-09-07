SELECT posts.*, 
        users.image as ui, 
        users.username 
FROM posts
join users on users.user_id = posts.user_id
ORDER BY date DESC;