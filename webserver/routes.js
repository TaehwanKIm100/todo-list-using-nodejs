'use strict';
const main = require('./routes/main');

exports.init = function(app){
  main.init();
  app.get('/', main.viewMain);
}
