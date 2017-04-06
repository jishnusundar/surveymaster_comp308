module.exports.displayUserSurveyPage = (req,res,next)=> {
     return res.render('surveys/userSurveyList',{
        title:'Your surveys',
        user:req.user?req.user.username:''
    });
}

module.exports.displaySurveyTemplate = (req,res,next) => {
    return res.render('surveys/surveyTemplate',{
        title:'Choose a Template',
        user:req.user?req.user.username:''
    });
}

module.exports.displaySurveyConfigurePage = (req,res,next) => {
    return res.render('surveys/surveyConfig',{
        title:'Configure your survey',
        user:req.user?req.user.username:''
    });
}

module.exports.displaySurveyTemplate = (req,res,next) => {
       req.session.title = req.body.surveyTitle;
   req.session.surveyType = req.body.surveyType;
   req.session.lifeTime = req.body.lifeTime;

  return res.render('surveys/surveyTemplate',{
     title:'Customize your survey',
     user:req.user?req.user.username:''
   });
}

module.exports.displaySurveyConfirmation = (req,res,next) => {
    return res.render('surveys/confirmSurvey',{
        title:'Confirm your survey',
        user:req.user?req.user.username:''
    });
}

module.exports.displaySurveyStatistics = (req,res,next,id) => {
    return res.render('surveys/surveyStats',{
        title:'Your survey Statistics',
        user:req.user?req.user.username:''
    });
}