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

router.get('/userSurveyList',requireAuth,(req,res,next)=>{
   surveysController.displayUserSurveyPage(req,res,next);
});

router.get('/surveyTemplate',requireAuth,(req,res,next)=>{
   surveysController.displaySurveyTemplate(req,res,next);
});

router.get('/surveyConfig',requireAuth,(req,res,next)=>{
   surveysController.displaySurveyConfigurePage(req,res,next);
});

router.post('/surveyConfig',requireAuth,(req,res,next)=>{
surveysController.displaySurveyTemplate(req,res,next);

});

router.get('/tfSurveyTemplate',requireAuth, (req,res,next) => {
  surveysController.displayTFSurveyTemplate(req,res,next);
});

router.post('/tfSurveyTemplate',requireAuth, (req,res,next) => {
  surveysController.processTFSurvey(req,res,next);
});

router.get('/viewTFSurvey/:id',requireAuth,(req,res,next)=>{
surveysController.viewTFSurvey(req,res,next);
});

router.get('/textSurveyTemplate',requireAuth,(req,res,next) => {
surveysController.displayTextSurveyTemplate(req,res,next);
});

router.get('/textViewSurvey/:id',requireAuth,(req,res,next) => {
  surveysController.textViewSurvey(req,res,next);
});

router.get('/MCQSurveyTemplate',requireAuth,(req,res,next) => {
  surveysController.displayMCQSurveyTemplate(req,res,next);
});

router.post('/MCQSurveyTemplate',requireAuth,(req,res,next) => {
  surveysController.processMCQSurvey(req,res,next);
});

router.get('/editMCQSurvey/:id',requireAuth,(req,res,next) => {
surveysController.displaMCQEditPage(req,res,next,req.params.id);
});

router.post('/editMCQSurvey/:id',requireAuth,(req,res,next) => {
surveysController.processMCQSurveyEdit(req,res,next,req.params.id);
});

router.get('/editTFSurvey/:id',requireAuth,(req,res,next) => {
surveysController.displayTfEditPage(req,res,next,req.params.id);
});

router.post('/editTFSurvey/:id',requireAuth,(req,res,next) => {
surveysController.processTfEdit(req,res,next,req.params.id);
});

router.get('/viewMCQSurvey/:id',requireAuth,(req,res,next) => {
surveysController.viewMCQSurvey(req,res,next,req.params.id);
});

router.get('/QaSurveyTemplate',requireAuth,(req,res,next)=> {
  surveysController.displayQaSurveyTemplate(req,res,next);
});

router.post('/QaSurveyTemplate',requireAuth,(req,res,next)=> {
  surveysController.processQASurvey(req,res,next);
});

router.get('/editQASurvey/:id',(req,res,next)=> {
surveysController.displayQAEditPage(req,res,next);
});

router.post('/editQASurvey/:id',(req,res,next)=> {
surveysController.editQaSurvey(req,res,next);
});

router.get('/confirmSurvey',requireAuth,(req,res,next)=>{
   surveysController.displaySurveyConfirmation(req,res,next);
});

router.get('/identifySurvey/:id',requireAuth,(req,res,next)=> {
surveysController.identifySurveyAndRedirect(req,res,next);
});

router.get('/identifyEdit/:id',requireAuth,(req,res,next)=> {
surveysController.identifySurveyToEdit(req,res,next);
});

router.get('/surveyStats/:id',requireAuth,(req,res,next)=>{
   surveysController.displaySurveyStatistics(req,res,next,req.params.id);
});



router.get('/delete/:id',requireAuth,(req,res,next) => {
  surveysController.deleteSurvey(req,res,next,req.params.id);
});

module.exports = router;