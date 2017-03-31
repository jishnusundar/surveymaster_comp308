module.exports.displayUserSurveyPage = (req,res,next)=> {
     return res.render('surveys/userSurveyList',{
        title:'Your surveys',
        user:req.user?req.user.username:''
    });
}