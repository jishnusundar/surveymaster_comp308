let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let passport = require('passport');

//define the user model
let UserModel = require('../models/users')
let User = UserModel.User;

let authController = require('../controllers/auth');

router.get('/login',(req,res,next)=>{
    authController.displayLogin(req,res,next);
})

router.post('/login', passport.authenticate('local', {
successRedirect: '/survey/userSurveyList',
failureRedirect: '/auth/login', 
failureFlash: true
}));

router.get('/register',(req,res,next) => {
   authController.displayRegister(req,res,next);
});

router.post('/register',(req,res,next)=> {
    authController.processRegister(req,res,next);
});

router.get('/logout',(req,res,next)=> {
    req.logout();
    res.redirect('/auth/login'); //redirect to home page
})

module.exports = router;