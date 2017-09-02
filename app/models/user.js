var mongoose = require('mongoose');
Schema = mongoose.Schema;

// Model Schema
var ModelSchema = new Schema ({
	firstname : {
        type: String
	},
	lastname : {
        type: String
	},
	email : {
		type: String
	},
	password : {
		type: String
	}
});
module.exports = mongoose.model('User', ModelSchema);