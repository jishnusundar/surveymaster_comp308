let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

let mongoose = require('mongoose');
let passport = require('passport');

//define the user model
let UserModel = require('../models/users')
let User = UserModel.User;

//modules for contactUs emailer
'use strict';
const nodemailer = require('nodemailer');

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

router.post('/contactUs',(req,res,next) => {
  
  // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'surveymaster.team07@gmail.com',
        pass: 'Surveymaster07'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: req.body.contactemail, // sender address
    to: 'surveymaster.team07@gmail.com', // list of receivers
    subject: 'Contact Requested by a visitor', // Subject line
    text: 'Contact Requested by a visitor', // plain text body
    html: '<b>Name: </b> <p>'+req.body.contactname+' </p> <br> <b>Email: </b> <p>'+ req.body.contactemail+' </p> <br> <b>Message: </b> <p>'+ req.body.message+' </p> <br>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
   
  setTimeout(redirectHome,2000);

        function redirectHome() {
          return res.redirect('/');
        }

});

//Get the Contact page and render the login form
router.get('/aboutus',(req,res,next) => {
   res.render('aboutus',{
        title:"About us",
        user:req.user?req.user.username:'',
        messages:''
    });
   
});



module.exports = router;