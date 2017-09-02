// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		Model = require('../models/model')

	// Example API route
	app.get('/models', function(req, res) {

		// Checks the model collection and returns all of them`
		Model.find(function(err, models) {

			// returns all people in JSON format
			res.send(models);
		});
	});

	// Example POST route
	app.post('/models', function (req, res) {
		Model.create({
			name : req.body.name // Bound using Angular
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Model.find(function(err, models) {
				res.send(models);
			});
		});
	});

	// Example DELETE route
	app.delete('/models/:model_id', function (req, res) {
		Model.remove({
			_id: req.params.model_id
		}, function(err, model) {
			if(err) {
				res.send(err);
			}

			Model.find(function(err, models) {
				res.send(models);
			});
		});
	});
	// Example POST route
	app.get('/login', function (req, res) {
		var isExists = con.find({
			email : req.body.email // Bound using Angular
		});
		console.log(isExists);

		if (isExists) {
			res.send("logged in!");
		} else {
			res.send("Please register");
		}
	});
		// Example POST route
	app.post('/signup', function (req, res) {
		Model.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email : req.body.email, // Bound using Angular
			password : req.body.password,

		}, function(err, model) {
			if(err) {
				res.send("Please try again!");
			}

			Model.find(function(err, users) {
				res.send("You are Registered!");
			});
		});
	});
	// Example POST route
	app.post('/users', function (req, res) {
		Model.create({
			email : req.body.email, // Bound using Angular
			password : req.body.password
		}, function(err, model) {
			if(err) {
				res.send("Please try again!");
			}

			Model.find(function(err, users) {
				res.send("You are Registered!");
			});
		});
	});
	app.get('/users', function(req, res) {

		// Checks the model collection and returns all of them`
		Model.find(function(err, users) {

			// returns all people in JSON format
			res.send(users);
		});
	});
}