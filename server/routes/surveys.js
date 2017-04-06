let express = require('express');
let router = express.Router();

let surveysController = require('../controllers/surveys');

function requireAuth(req,res,next) {
  //check if the user is logged in, else prompt to log in
  if(!req.isAuthenticated()) {
    return res.redirect('/auth/login');
  }
    next();
}

router.get('/userSurveyList',(req,res,next)=>{
   surveysController.displayUserSurveyPage(req,res,next);
});

router.get('/surveyTemplate',(req,res,next)=>{
   surveysController.displaySurveyTemplate(req,res,next);
});

module.exports = router;