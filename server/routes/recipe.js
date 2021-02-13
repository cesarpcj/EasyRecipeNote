var express = require("express");
var router = express.Router();
var Recipe = require("../models/RecipeModel");
var auth = require("../middlewares/jwt");

router.get("/category/:category", auth, (req, res, next)=>{
    console.log(req.user);
    const category = req.params.category;
    Recipe.find({category : {$in : category}, user:req.user._id})
    .then((result) => {
        res.json({recipes: result})
    }).catch((err) => {
        next(err)
    });
})

router.get("/:recipeId", auth, (req, res, next)=>{
    const id = req.params.recipeId;
    Recipe.findOne({_id:id, user:req.user._id})
    .then((result) => {
        res.json({recipe: result})
    }).catch((err) => {
        next(err)
    });
})

router.get("/edit/:recipeId", auth, (req, res, next)=>{
    const id = req.params.recipeId;
    Recipe.findOne({_id:id, user:req.user._id})
    .then((result) => {
        res.json({recipe: result})
    }).catch((err) => {
        next(err)
    });
})
router.post("/update/:recipeId", auth, (req, res, next)=>{
    const id = req.params.recipeId;
    const {name , ingredients, steps, notes, category, time, servings} = req.body;
    
    Recipe.findByIdAndUpdate(id, {name, ingredients : JSON.parse(ingredients), steps,notes, category : JSON.parse(category), time, servings})
    .then((result) => {
        res.json({recipe: result, msg : "recipe updated"})
    }).catch((err) => {
        next(err)
    });
})
router.post("/create", auth, (req, res, next)=>{
    
    const {name , ingredients, steps, notes, category, time, servings} = req.body;
    //console.log("ingredientes: "+JSON.stringify(ingredients));
    Recipe.create({
         user:req.user._id,name , ingredients : JSON.parse(ingredients), steps, notes, category : JSON.parse(category),time, servings
    })
    .then((result) => {
        res.json({recipe: result, msg : "recipe created"})
    }).catch((err) => {
        next(err)
    });
})
router.post("/delete/:recipeId", auth, (req, res, next)=>{
    
    Recipe.findByIdAndDelete(req.params.recipeId)
    .then((result) => {
        res.json({recipe: result,msg : "recipe deleted"})
    }).catch((err) => {
        next(err)
    });
})

module.exports = router;