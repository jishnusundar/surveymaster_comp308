let express = require('express');
let router = express.Router();

let respondController = require('../controllers/respond');

router.get('/:id',(req,res,next) => {
respondController.displayResponsePage(req,res,next,req.params.id);
});

module.exports = router;