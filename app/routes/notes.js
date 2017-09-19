module.exports = function(app) {
	var mongoose = require('mongoose'),
	Model = require('../models/note');

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

	app.post('/getNote', function (req, res) {
		console.log(req.body.email);
		Model.find({
				email: req.body.email
            },
		    function(err, notes) {
				if(err) {
					res.send("Error");
				}
				res.send(notes);
	        }
		);
	});
}
