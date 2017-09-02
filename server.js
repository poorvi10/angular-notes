// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Configs
var db = require('./config/db');

// Connect to the DB
var con = mongoose.connect(db.url);

// Initialize the Express App
var app = express();

// Configure 

// To expose public assets to the world
app.use(express.static(__dirname + '/public'));

// log every request to the console
app.use(morgan('dev'));

// For parsing HTTP responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Express Routes
require('./app/routes/login')(app);
require('./app/routes/register')(app);
require('./app/routes/routes')(app);

// Start the app with listen and a port number
app.listen(3000);
console.log("Express server running at http://localhost:3000");
