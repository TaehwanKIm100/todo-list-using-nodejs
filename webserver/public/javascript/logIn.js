'use strict';
console.log(require);
const authentication = require('./modules/authentication');
const apiServerConfig = require('./modules/apiServerconfig');

$('log-in-button').on('click', function(){
  let $this = $(this),
    $logInForm = $this.closest('.log-in-form'),
    $id = $logInForm.find('#id'),
    $password = $logInForm.find('#password');

  $this.preventDefault();
  authentication.logIn(apiServerConfig.logInUrl, $id.val(), $password.val())
    .then(function(data, status, header){
      console.log(data, status, header);
    }, function(header){
      console.log(heaer);
    })
    .catch(function(){
      console.log('what the fuck!');
    });
})
