'use strict';
var hbs;
var fs = require('fs');

module.exports.init = () => {
  hbs = require('hbs');
  hbs.registerPartial('header', fs.readFileSync('views/partials/header.hbs', 'utf-8'));
  hbs.registerPartial('footer', fs.readFileSync('views/partials/footer.hbs', 'utf-8'));
}

module.exports.viewMain = (req, res) => {
  res.render('pages/main');
}
