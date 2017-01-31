'use strict';

var TodoList = function(){
  this.todoList = [];
  this.todoIdSequence = 0;
};

TodoList.prototype.addTodo = function(todo){
  let newTodo = {};
  newTodo.todo = todo;
  newTodo.id = this.todoIdSequence++;
  newTodo.completed = false;
  newTodo.date = new Date();

  this.todoList.push(newTodo);
};

TodoList.prototype.findById = function(element){
  return element.id === this;
};

TodoList.prototype.modifyTodo = function(id, todo){
  let index = this.todoList.findIndex(this.findById, id);
  if(index >= 0) {
    this.todoList[index].todo = todo;
    return true;
  } else {
    return false;
  }
};

TodoList.prototype.modifyCompleted = function(id, completed){
  let index = this.todoList.findIndex(this.findById, id);
  if(index >= 0) {
    this.todoList[index].completed = completed;
    return true;
  } else {
    return false;
  }
};

TodoList.prototype.deleteTodo = function(id){
  let index = this.todoList.findIndex(this.findById, id);
  if(index >= 0) {
    this.todoList.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

module.exports = TodoList;
