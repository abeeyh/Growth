const express = require('express');

const UsersController = require('./controllers/UsersController');
const PostsController = require('./controllers/PostsController');

const routes = express.Router();

routes.get('/users', UsersController.index)
routes.get('/posts', PostsController.index)

module.exports = routes;