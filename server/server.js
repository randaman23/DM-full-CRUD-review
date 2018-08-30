const express = require('express'),
  bodyParser = require('body-parser'),
  ctrl = require('./controller.js');

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', ctrl.getPosts);
app.put('/api/post/:id', ctrl.updatePost);
app.post('/api/post', ctrl.addPost);
app.delete('/api/post/:id', ctrl.deletePost);

const PORT = 3005;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
