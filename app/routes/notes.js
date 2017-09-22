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
					res.send("error");
				}
				res.send(model);
	        }
		);
	});

	app.post('/getNote', function (req, res) {
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

	app.post('/deleteNote', function (req, res) {
		Model.remove({ _id: req.body.id }, function(err, result) {
		    if (result.result.ok) {
		        res.send("Success");
		    }
		    else {
		        res.send("Error");
		    }
		});
	});

	app.post('/getNoteById', function (req, res) {
		Model.find({
				_id: req.body.noteId
            },
		    function(err, notes) {
				if(err) {
					res.send("Error");
				} else {
					res.send(notes);
				}
				
	        }
		);
	});
    
    app.post('/updateNote', function (req, res) {
    	var conditions = { noteTitle: req.body.noteTitle, noteBody: req.body.noteBody }
  			, options = { multi: true };
    	var query = { _id: req.body.noteId };
		Model.update(query, conditions, options, function(err, numAffected) {
				if(err) {
					res.send("Error");
				} else {
					res.send(numAffected);
				}
				
	        })
	});
}
