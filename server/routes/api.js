var express = require("express");
var authRouter = require("./auth");
var bookRouter = require("./book");
var recipeRouter = require("./recipe");

var app = express();

app.use("/auth/", authRouter);
app.use("/book/", bookRouter);
app.use("/recipe/", recipeRouter);

module.exports = app;