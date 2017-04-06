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