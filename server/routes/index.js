let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

let mongoose = require('mongoose');
let passport = require('passport');

//define the user model
let UserModel = require('../models/users')
let User = UserModel.User;


//Get the home page and render the login form
router.get('/',(req,res,next) => {
   res.render('home',{
        title:"Welcome to Survey Master",
        messages: req.flash('loginMessage'),
        user:req.user?req.user.username:''
    });
});


//Process Login
router.post('/', passport.authenticate('local', {
successRedirect: '/survey/userSurveyList',
failureRedirect: '/',
failureFlash: true
}));

module.exports = router;