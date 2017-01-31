'use strict';

const TodoList = require('./models/todoList'),
  responseCodeConfig = require('./responseCodeConfig');

let todoLists = {};

module.exports.getTodoLists = function(req, res){
  let nickname = req.params.nickname;
  if(nickname in todoLists) {
    res.send(responseCodeConfig.OK, todoLists[nickname]);
  } else {
    res.send(responseCodeConfig.OK, {});
  }
};

module.exports.addTodoList = function(req, res){
  let nickname = req.params.nickname,
    body = JSON.parse(req.body);

  if(todoLists[nickname] === undefined) {
    todoLists[nickname] = new TodoList();
  }

  if(todoLists[nickname].addTodo(body.todo)) {
    res.send(responseCodeConfig.CREATED);
  } else {
    res.send(responseCodeConfig.BAD_REQUEST);
  }

};
