'use strict';
const restify = require('restify'),
  auth = require('./auth'),
  serverConfig = require('./serverConfig'),
  todo = require('./todo');

const server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/:nickname', todo.getTodoLists);
server.post('/:nickname', todo.addTodoList);
// server.put('/:nickname/:id');
// server.delete('/:nickname/:id');


server.listen(serverConfig.port, function(){
  console.log("server started");
});
