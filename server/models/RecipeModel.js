var mongoose = require('mongoose');
// var AutoIncrement = require("mongoose-sequence")(mongoose);

var RecipeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    name : String,
    ingredients : [{name : {type : String}, quantity : {type:String}, unit : {type:String, enum: ['g', 'kg', 'ml', 'l', 'pcs']}}],
    steps : String,
    notes : String,
    category : [String],
    time: String,
    servings : String,
},{timestamps : true});

// RecipeSchema.plugin(AutoIncrement, {inc_field : 'id'});

module.exports = mongoose.model("Recipe", RecipeSchema);
