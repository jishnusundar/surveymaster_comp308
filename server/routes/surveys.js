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

router.get('/surveyConfig',(req,res,next)=>{
   surveysController.displaySurveyConfigurePage(req,res,next);
});

router.post('/surveyConfig',(req,res,next)=>{
surveysController.displaySurveyTemplate(req,res,next);

});

router.get('/tfSurveyTemplate', (req,res,next) => {
  surveysController.displayTFSurveyTemplate(req,res,next);
});

router.get('/textSurveyTemplate',(req,res,next) => {
surveysController.displayTextSurveyTemplate(req,res,next);
});

router.get('/textViewSurvey',(req,res,next) => {
  surveysController.textViewSurvey(req,res,next);
})

router.get('/MCQSurveyTemplate',(req,res,next) => {
  surveysController.displayMCQSurveyTemplate(req,res,next);
});

router.post('/MCQSurveyTemplate',(req,res,next) => {
  surveysController.processMCQSurvey(req,res,next);
});

router.get('/editMCQSurvey/:id',(req,res,next) => {
surveysController.displaMCQEditPage(req,res,next,req.params.id);
});

router.post('/editMCQSurvey/:id',(req,res,next) => {
surveysController.processMCQSurveyEdit(req,res,next,req.params.id);
});

router.get('/viewMCQSurvey/:id',(req,res,next) => {
surveysController.viewMCQSurvey(req,res,next,req.params.id);
});

router.get('/confirmSurvey',(req,res,next)=>{
   surveysController.displaySurveyConfirmation(req,res,next);
});

router.get('/surveyStats/:id',(req,res,next)=>{
   surveysController.displaySurveyStatistics(req,res,next,req.params.id);
});

router.get('/tfViewSurvey',(req,res,next) => {
  surveysController.displayTFViewPage(req,res,next);
})

module.exports = router;