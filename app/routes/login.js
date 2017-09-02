// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose');
	Model = require('../models/user');

	/* To login the user */
	app.post('/login', function (req, res) {
		var isExists = Model.find({
			email : req.body.email // Bound using Angular
		}, function (err, users) {
			if (users.length != 0) {
				if (users[0].password == req.body.password) {
					res.send('logged In');
				} else {
					res.send('Enter correct password');
				}
			} else {
				res.send('Please register!');
			}
		});
	});
}