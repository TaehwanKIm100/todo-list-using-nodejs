function lonIn(url, id, password){
  return $.ajax({
    url: url,
    type: 'POST',
    data: {
      id: id,
      password: password
    }
  });
};

module.exports.logIn = logIn;
