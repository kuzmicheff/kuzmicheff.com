// import environment
require('dotenv').config();

// import modules
var express        = require('express');
var https          = require('https');
var fs             = require('fs');
var logger         = require('morgan');
var debug          = require('debug')('server:server');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// create app
var app = express();

var apiPort = process.env.apiPort;

var options = {
  key: fs.readFileSync(process.env.keyPath),
  cert: fs.readFileSync(process.env.certPath)
};

// mount middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

// mount CORS support
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// default route
app.get('/', function(req, res, next) {
  res.status(200)
    .send('Welcome to Andre Kuzmicheff\'s API!');
});

// launch server
https.createServer(options, app).listen(apiPort, () => {
  console.log(`Node Express server listening on https://localhost:${apiPort}`);
});
