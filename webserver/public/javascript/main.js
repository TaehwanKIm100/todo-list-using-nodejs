$(document).ready(function(){
  $('#add-todo-button').on('click', function(){
    let $this = $(this),
      $todoForm = $this.closest('.todo-form'),
      $todo = $todoForm.find('#todo'),
      $nickname = $('#nickname');

    console.log($this);
    // $this.preventDefault();
    addTodo($nickname.val(), $todo.val())
      .then(function(data){
        console.log(data, status, header);
      }, function(data, status, header){
        console.log(header);
      });
  });
});
