var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	hash : {type : String}
}, {timestamps: true});

// Virtual for user's full name
UserSchema
	.virtual("fullName")
	.get(function () {
		return this.firstName + " " + this.lastName;
	});

module.exports = mongoose.model("User", UserSchema);