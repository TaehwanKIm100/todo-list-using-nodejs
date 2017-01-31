function getTodoLists(nickname){
  return $.ajax({
    url: defaultUrl
      + '/'
      + nickname,
    type: 'GET'
  });
}

function addTodo(nickname, todo){
  return $.ajax({
    url: defaultUrl
      + '/'
      + nickname,
    type: 'POST',
    data: JSON.stringify({
      todo: todo
    })
  });
}
