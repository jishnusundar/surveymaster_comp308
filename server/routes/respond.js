let express = require('express');
let router = express.Router();

let respondController = require('../controllers/respond');

router.get('/respondMCQ/:id',(req,res,next) => {
respondController.displayMCQResponsePage(req,res,next,req.params.id);
});

router.post('/respondMCQ/:id',(req,res,next) => {
respondController.processMCQResponse(req,res,next,req.params.id);
});

router.get('/identifyResponseType/:id',(req,res,next)=>{

respondController.identifyResponseSurveyType(req,res,next);

});

router.get('/respondTF/:id', (req,res,next)=> {
    respondController.displayTfResponsePage(req,res,next);
});

router.post('/respondTF/:id', (req,res,next)=> {
    respondController.processTfResponse(req,res,next);
});

module.exports = router;