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
        user:req.user?req.user.username:'',
        messages:''
    });
   
});

//Get the Contact page and render the login form
router.get('/contactUs',(req,res,next) => {
   res.render('contactUs',{
        title:"Contact Us",
        user:req.user?req.user.username:'',
        messages:''
    });
   
});



module.exports = router;