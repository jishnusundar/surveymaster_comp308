let mongoose = require('mongoose');
let passport = require('passport');

//define the user model
let UserModel = require('../models/users')
let User = UserModel.User;

module.exports.displayLogin = (req,res,next) => {
  return res.render('auth/login',{
title:'Login',
messages: req.flash('loginMessage'),
        user:req.user?req.user.username:''
  });
}



module.exports.requireAuth=(req,res,next)=> {
  //check if the user is logged index
  if(!req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

module.exports.displayRegister = (req,res,next) => {
    return res.render('auth/register.ejs',{
        title:'Register',
        messages: req.flash('registerMessage'),
        user:req.user?req.user.username:''
    });
}

module.exports.processRegister = (req,res,next) => {
      User.register(
    new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        
      }),
      req.body.password,
      (err) => {
        if(err) {
          console.log('Error insterting new user: '+ err.message);
          if(err.name == 'UserExistsError') {
            req.flash('registerMessage', 'Registration Error: User Already Exists!');
          }
          return res.render('auth/register', {
            title: 'Register',
              messages: req.flash('registerMessage'),
              user:req.user?req.user.username:''
            
          });
        }
        // if registration is successful
        return passport.authenticate('local')(req, res, ()=>{
            console.log("Registration Successful");
           res.redirect('/survey/userSurveyList');
        });
      });
}