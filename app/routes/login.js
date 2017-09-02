// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
	Model = require('../models/user')

	/* To login the user */
	app.post('/login', function (req, res) {
		var isExists = Model.find({
			email : req.body.email // Bound using Angular
		});
		console.log(isExists);

		if (isExists) {
			res.send("logged in!");
		} else {
			res.send("Please register");
		}
	});
}