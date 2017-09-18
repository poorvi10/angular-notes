module.exports = function(app) {
	var mongoose = require('mongoose');
	Model = require('../models/user');

	/* To login the user */
	app.post('/getUser', function (req, res) {
		console.log(req);
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

	app.post('/setUser', function (req, res) {
		console.log(req);
		var isExists = Model.insert({
			userId : req.body.userId,
			noteTitle : req.body.noteTitle,
			noteBody: req.body.noteBody

		}, function (err, users) {

		});
	});
}
