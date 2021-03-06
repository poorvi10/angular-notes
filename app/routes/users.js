// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
	Model = require('../models/user');	

	/* To login the user */
	app.post('/login', function (req, res) {
		var isExists = Model.find({
			email : req.body.email // Bound using Angular
		}, function (err, users) {
			if (users.length != 0) {
				if (users[0].password == req.body.password) {
					res.send({"status": 200,"msg":"logged In", "email": users[0].email});
				} else {
					res.send({"status": 500,"msg":"Enter correct password"});
				}
			} else {
				res.send({"status": 500,"msg":"Please register!"});
			}
		});
	});

	/* Register the user */
	app.post('/setUser', function (req, res) {
		Model.create({
				firstname: req.body.firstname,
				lastname: req.body.lastname,
				email : req.body.email, 
				password : req.body.password,
            },
		    function(err, model) {
				if(err) {
					res.send("Please try again!");
				}
				res.send("You are Registered!");
	        }
		);
	});

	/* To get users data */
	app.post('/getUser', function (req, res) {
		var isExists = Model.find({
			email : req.body.email // Bound using Angular
		}, function (err, users) {
			if (users.length != 0) {
					res.send({"firstname": users[0].firstname, "lastname":users[0].lastname});
			} else {
				res.send({"status": 500,"msg":"Please register!"});
			}
		});
	});
}
