var mongoose = require('mongoose');
Schema = mongoose.Schema;

// Model Schema
var NoteSchema = new Schema ({
	email : {
        type: String
	},
	noteTitle : {
        type: String
	},
	noteBody : {
		type: String
	}
});
module.exports = mongoose.model('Note', NoteSchema);