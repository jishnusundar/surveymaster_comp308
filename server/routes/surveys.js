let express = require('express');
let router = express.Router();

let surveysController = require('../controllers/surveys');
router.get('/userSurveyList',(req,res,next)=>{
   surveysController.displayUserSurveyPage(req,res,next);
});

module.exports = router;