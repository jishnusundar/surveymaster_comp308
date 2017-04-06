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

router.get('/configureSurvey',(req,res,next)=>{
   surveysController.displaySurveyConfigurePage(req,res,next);
});

router.get('/confirmSurvey',(req,res,next)=>{
   surveysController.displaySurveyConfirmation(req,res,next);
});

router.get('/surveyStats/:id',(req,res,next)=>{
   surveysController.displaySurveyStatistics(req,res,next,req.params.id);
});

module.exports = router;