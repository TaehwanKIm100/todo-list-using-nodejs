'use strict';

var TodoList = function(){
  this.todoList = [];
  this.todoIdSequence = 0;
};

TodoList.prototype.addTodo = function(todo){
  if(!todo.trim()){
    return false;
  }
  let newTodo = {};
  newTodo.todo = todo;
  newTodo.id = this.todoIdSequence++;
  newTodo.completed = false;
  newTodo.date = (new Date());

  this.todoList.push(newTodo);
  return true;
};

TodoList.prototype.findById = function(element){
  return element.id === this;
};

TodoList.prototype.actionTodo = function(id, callbackArg, callback){
  let index = this.todoList.findIndex(this.findById, id);
  if(index >= 0) {
    callback(index, callbackArg);
    return true;
  } else {
    return false;
  }
};

TodoList.prototype.modifyTodo = function(id, todo){
    return this.actionTodo(id, todo, function(){
      this.todoList[arguments[0]].todo = arguments[1];
    });
}

// TodoList.prototype.modifyTodo = function(id, todo){
//   let index = this.todoList.findIndex(this.findById, id);
//   if(index >= 0) {
//     this.todoList[index].todo = todo;
//     return true;
//   } else {
//     return false;
//   }
// };

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
  return this.actionTodo(id, undefined, function(){
    this.todoList.splice(arguments[0], 1);
  });
}

// TodoList.prototype.deleteTodo = function(id){
//   let index = this.todoList.findIndex(this.findById, id);
//   if(index >= 0) {
//     this.todoList.splice(index, 1);
//     return true;
//   } else {
//     return false;
//   }
// };

module.exports = TodoList;
