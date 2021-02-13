// var express = require("express");
// const AuthController = require("../controllers/AuthController");

// var router = express.Router();

// router.post("/register", AuthController.register);
// router.post("/login", AuthController.login);
// router.post("/verify-otp", AuthController.verifyConfirm);
// router.post("/resend-verify-otp", AuthController.resendConfirmOtp);

// module.exports = router;

var {Router, json} = require("express");
var router = new Router();
var bcryptjs = require("bcryptjs");
var User = require("../models/UserModel");
var jwt = require("jsonwebtoken");
var apiResponse = require("../helpers/apiResponse");
var auth = require("../middlewares/jwt");


router.post("/register", (req,res,next)=>{
    const {name, email, password} = req.body;

    User.findOne({email : email})
    .then((user) => {
        if(user) {
            return Promise.reject("Email already exists");
        }else{
            return bcryptjs.hash(password,10);
        }  
    })
    .then((hash) => {
        return User.create(
            {name,
            email,
            hash}
            );    
    })
    .then((user)=>{
        res.json({user:user});
    })
    .catch((err) => {
        next(err);
    });

});

router.post("/login", (req, res,next)=>{
    const {email, password} = req.body;
    let user;
    User.findOne({email})
    .then((result) => {
        user = result;
        return bcryptjs.compare(password, user.hash);
        
    })
    .then((passwordMatch)=>{
        if(passwordMatch){
            let userData = {
                _id : user._id,
                name : user.name,
                email : user.email,

            };

            const jwtPayload = userData;
            const jwtData = {expiresIn: process.env.JWT_TIMEOUT_DURATION};
            const secret = process.env.JWT_SECRET;

            userData.token = jwt.sign(jwtPayload,secret,jwtData);
            return apiResponse.successResponseWithData(res, "Login success", userData);
        }else{
            return Promise.reject("wrong password");
        }
    }).catch((err) => {
        next(err);
    });
});

router.get('/authenticate', auth, (req, res, next) => {
    console.log(req.user);

    return apiResponse.successResponseWithData(res, "auth success", req.user);
        
});

module.exports = router;