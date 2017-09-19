// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
	Model = require('../models/user')

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
}