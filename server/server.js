require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  ctrl = require('./controller.js');
auth_ctrl = require('./auth_controller.js');

const app = express(),
  PORT = 3005;

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING).then(db => {
  app.set('db', db);
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});

app.get('/api/posts', ctrl.getPosts);
app.put('/api/post/:id', ctrl.updatePost);
app.post('/api/post', ctrl.addPost);
app.delete('/api/post/:id', ctrl.deletePost);

app.post('/api/login', auth_ctrl.login);
app.post('/api/register', auth_ctrl.register);
