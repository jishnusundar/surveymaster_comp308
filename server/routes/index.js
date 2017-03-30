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
   indexController.displayHome(req,res,next);
})


//Process Login
router.post('/', passport.authenticate('local', {
successRedirect: '/auth/register',
failureRedirect: '/',
failureFlash: true
}));

module.exports = router;