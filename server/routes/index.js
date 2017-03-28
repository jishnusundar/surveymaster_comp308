let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
router.get('/',(req,res,next) => {
   indexController.displayHome(req,res,next);
})

module.exports = router;