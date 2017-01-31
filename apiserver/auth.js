'use strict';

const responseCodeConfig = require('./responseCodeConfig');

function logIn(req, res){
  //login check
  // let requestData = req.body.data;
  // if(requestData.name !== ''){
  //   console.log('here');
  //   let responseData = {
  //     id: requestData.id,
  //     password: requestData.password
  //   };
  //   res.send(responseCodeConfig.NO_CONTENT, responseData);
  // } else {
  //   console.log('there');
  //   res.send(responseCodeConfig.OK, {name: 'hello'});
  // }
  res.send(responseCodeConfig.OK, {
    id: req.params.id,
    password: 'world'
  });
}


module.exports.logIn = logIn;
