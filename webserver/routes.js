'use strict';
const main = require('./routes/main');

exports.init = function(app){
  app.get('/', main.viewMain);
}
