module.exports = function(app) {
	var mongoose = require('mongoose');
	Model = require('../models/user');

	/* To login the user */
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

	app.post('/setUser', function (req, res) {
		var insertUser = Model.insert({
			userId : req.body.userId,
			noteTitle : req.body.noteTitle,
			noteBody: req.body.noteBody

		}, function (err, users) {

		});
	});
}
