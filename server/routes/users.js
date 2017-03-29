let express = require('express');
let router = express.Router();

let usersController = require('../controllers/users');

router.get('/register',(req,res,next) => {
   usersController.displayRegister(req,res,next);
});

router.post('/register',(req,res,next)=> {
    usersController.processRegister(req,res,next);
});

module.exports = router;