let express = require('express');
let router = express.Router();

let authController = require('../controllers/auth');

router.get('/register',(req,res,next) => {
   authController.displayRegister(req,res,next);
});

router.post('/register',(req,res,next)=> {
    authController.processRegister(req,res,next);
});

router.get('/logout',(req,res,next)=> {
    req.logout();
    res.redirect('/'); //redirect to home page
})

module.exports = router;