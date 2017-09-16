module.exports = function(app) {
	var mongoose = require('mongoose');
	Model = require('../models/user');

	/* To login the user */
	app.post('/users', function (req, res) {
		var isExists = Model.find({
			email : req.body.email // Bound using Angular
		}, function (err, users) {
			if (users.length != 0) {
					res.send({"user": user});
			} else {
				res.send({"status": 500,"msg":"Please register!"});
			}
		});
	});
}