var express = require('express');
var routes = require('./routes');
var tasks = require('./routes/tasks');
var http = require('http');
var path = require('path');
var sqlite3 = require('sqlite3');
var exphbs  = require('express-handlebars'); 

var favicon = require('serve-favicon'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  csrf = require('csurf'),
  errorHandler = require('errorhandler');

// open connection
var sqlitedb = new sqlite3.Database('tasks.sqlite3');

var app = express();  

app.use(function(req, res, next) {
  req.db = sqlitedb;
  next();
});

app.engine('hbs', exphbs());
//app.engine('handlebars', exphbs());
app.set('view engine', 'hbs');

app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join('public','favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(methodOverride());
app.use(cookieParser('CEAF3FA4-F385-49AA-8FE4-54766A9874F1'));
app.use(session({
  secret: '59B93087-78BC-4EB9-993A-A61FC844F6C9',
  resave: true,
  saveUninitialized: true
}));
app.use(csrf());

//app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  if (req.cookies.user) {
    res.locals.user = req.cookies.user;
  }
  return next();
});

app.get('/', routes.index);
app.get('/tasks', tasks.list);
app.post('/tasks', tasks.add);
app.post('/tasks/:task_id', tasks.markCompleted);
app.get('/tasks/delete', tasks.del);
app.post('/login', routes.login);
app.get('/logout', routes.logout);

app.all('*', function(req, res){
  res.status(404).send();
})
// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
