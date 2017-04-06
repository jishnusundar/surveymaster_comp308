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
    if(req.user) //if user is already logged in
    {
       res.redirect('/survey/userSurveyList'); //redirect to users landing page (survey list page)
    }
    else //only if not logged in, show home page
    {
        res.render('home',{
        title:"Welcome to Survey Master",
        user:req.user?req.user.username:'',
        messages:''
    });

    }
   
});




module.exports = router;