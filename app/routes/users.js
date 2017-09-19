module.exports = function(app) {
	var mongoose = require('mongoose');
	Model = require('../models/note');

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

	app.post('/setNote', function (req, res) {
		Model.create({
				email: req.body.email,
				noteTitle: req.body.noteTitle,
				noteBody : req.body.noteBody
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
