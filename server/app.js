var {join} = require('path');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");
var serveFavicon = require('serve-favicon');

// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});
var db = mongoose.connection;

var app = express();

//don't show the log when it is test
app.use(serveFavicon(join(__dirname, 'public', 'favicon.ico')));

if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../client/build')));

//To allow cross-origin requests
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'] // <== this will be the URL of our React app (it will be running on port 3000)
  }));

//Route Prefixes
//app.use("/", indexRouter);
app.use("/api/", apiRouter);

//Route to react
app.get('*', (req, res, next) => {
	res.sendFile(join(__dirname, '../client/build/index.html'));
  });




app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

module.exports = app;
