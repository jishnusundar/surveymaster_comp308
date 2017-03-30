let express = require('express');
let router = express.Router();

let authController = require('../controllers/auth');

router.get('/register',(req,res,next) => {
   authController.displayRegister(req,res,next);
});

router.post('/register',(req,res,next)=> {
    authController.processRegister(req,res,next);
});

module.exports = router;