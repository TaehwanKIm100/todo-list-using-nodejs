var express = require('express'),
  routes = require('./routes'),
  path = require('path');

var app = express();

// app.set - template engine(ejs)을 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use - middleware를 해당 name으로 사용하겠다고 선언

// express.static - static asset를 제공하겠다는 의미
app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('hello');
});

routes.init(app);
