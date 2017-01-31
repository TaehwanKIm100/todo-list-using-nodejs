'use strict';

const TodoList = require('./todoList'),
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
  let nickname = req.params.nickname;
  let data = JSON.parse(req.body);
  if(todoLists[nickname] === undefined) {
    todoLists[nickname] = new TodoList();
  }
  todoLists[nickname].addTodo(data.todo);
  res.send(responseCodeConfig.CREATED);
};
