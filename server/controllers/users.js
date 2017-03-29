let mongoose = require('mongoose');
let passport = require('passport');

//define the user model
let UserModel = require('../models/users')
let User = UserModel.User;

module.exports.displayRegister = (req,res,next) => {
    return res.render('auth/register.ejs',{
        title:'Register',
        messages: req.flash('registerMessage')
    });
}

module.exports.processRegister = (req,res,next) => {
      User.register(
    new User({
        username: req.body.displayName,
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
              messages: req.flash('registerMessage')
            
          });
        }
        // if registration is successful
        return passport.authenticate('local')(req, res, ()=>{
            console.log("Registration Successful");
           res.redirect('/');
        });
      });
}