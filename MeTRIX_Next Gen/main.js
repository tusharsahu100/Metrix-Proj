/*This is startup file for the application*/

var express = require('express'); // importing express
var bodyParser = require('body-parser'); // importing body-parser
var path = require('path');
var flash = require('express-flash');

/*
This global function will be used to get the absolute path of file anywhere in the project.
This will help in including the modules without manually identifying absolute path
eg.
instead of something like this
require('../../../lib/Utils.js');
we can write
include('lib/Utils.js');
*/
global.base_dir = __dirname;
global.abs_path = function(path) {
  return base_dir + path;
}
global.include = function(file) {
  return require(abs_path('/' + file));
}

/*in order to read HTTP POST data
we have to use "body-parser" node module.
body-parser is a piece of express middleware that
reads a form's input and stores it as a javascript
object accessible through req.body*/

var app = express();
/* Declaring the Controller instances */
var loginController = require('./controllers/LoginController');
var registerController = require('./controllers/RegisterController');
var forgotPasswordController = require('./controllers/ForgotPasswordController');
var configureProjectController = require('./controllers/ConfigureProjectController');

/*bodyParser.urlencoded({extended: ...}) basically tells the system whether
you want to use a simple algorithm for shallow parsing (i.e. false) or
complex algorithm for deep parsing that can deal with nested
objects (i.e. true).*/

var urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname +'/../MeTRIX_Next Gen UI', 'views'));
app.use(bodyParser.json());
//app.use(flash());

/* route for handling login and registration */

//this code is for handling CORS request
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/register', urlencodedParser, registerController.register);
app.post('/login', urlencodedParser, loginController.login);
app.post('/forgotPassword', urlencodedParser, forgotPasswordController.sendEmail);
app.post('/configureProject', urlencodedParser, configureProjectController.ConfigureProject);

app.get('/configureProject', function(req, res) {
  configureProjectController.FetchProjectConfig(req, res);
});
app.get('/', function(req, res) {
  res.render('home', {
    Message: ''
  });
});

app.get('/register', function(req, res) {
  res.render('register');
});
app.get('/createProject', function(req, res) {
  res.render('createProject');
});
app.get('/logout', function(req, res) {
  res.render('home', {
    Message: 'You have been Successfully Logged out'
  });
});
app.get('/forgotPassword', function(req, res) {
  res.render('forgotPassword', {
    Message: ''
  });
});

app.listen(8012);
