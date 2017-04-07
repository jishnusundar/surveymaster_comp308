//Import model for surveys
let mcqSurvey = require('../models/mcqSurvey');
let mongoose = require('mongoose');


module.exports.displayUserSurveyPage = (req,res,next)=> 
{

 mcqSurvey.find( (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
     return res.render('surveys/userSurveyList',{
        title:'Your surveys',
        user:req.user?req.user.username:'',
        surveys: surveys
    });
    }
  });

     
}



module.exports.displaySurveyConfigurePage = (req,res,next) => {
    return res.render('surveys/surveyConfig',{
        title:'Configure your survey',
        user:req.user?req.user.username:''
    });
}

module.exports.displaySurveyTemplate = (req,res,next) => {
       req.session.surveyTitle = req.body.surveyTitle;
   req.session.surveyType = req.body.surveyType;
   req.session.lifeTime = req.body.lifeTime;
var type = req.body.surveyType;

if(type == "Multiple Choice")
{
    

  return res.redirect('/survey/MCQSurveyTemplate');
}
else if(type == "True or False")
{

}

else if(type == "Q&A") 
{

}

else 
{
    //No survey type selected
    return res.redirect('/survey/surveyConfig');
}
  
}

module.exports.displayMCQSurveyTemplate = (req,res,next) => {

    return res.render('surveys/MCQsurveyTemplate',{
     title:'Customize your survey',
     user:req.user?req.user.username:'',
     surveyTitle: req.session.surveyTitle,
     surveys:''

   });
   
}

module.exports.processMCQSurvey = (req,res,next) => {
        let newSurvey = mcqSurvey({
             "title": req.session.surveyTitle,
             "author": "",
             "lifetime": req.session.lifeTime,
             "created": Date.now(),
             "active": "true",
             "questions": {
                 "q1":req.body.q1,
                 "q1o1":req.body.q1o1,
                 "q1o2":req.body.q1o2,
                 "q1o3":req.body.q1o3,
                 "q1o4":req.body.q1o4,

                 "q2":req.body.q2,
                 "q2o1":req.body.q2o1,
                 "q2o2":req.body.q2o2,
                 "q2o3":req.body.q2o3,
                 "q2o4":req.body.q2o4,

                 "q3":req.body.q3,
                 "q3o1":req.body.q3o1,
                 "q3o2":req.body.q3o2,
                 "q3o3":req.body.q3o3,
                 "q3o4":req.body.q3o4,

                 "q4":req.body.q4,
                 "q4o1":req.body.q4o1,
                 "q4o2":req.body.q4o2,
                 "q4o3":req.body.q4o3,
                 "q4o4":req.body.q4o4,

                 "q5":req.body.q5,
                 "q5o1":req.body.q5o1,
                 "q5o2":req.body.q5o2,
                 "q5o3":req.body.q5o3,
                 "q5o4":req.body.q5o4,

                 "q6":req.body.q6,
                 "q6o1":req.body.q6o1,
                 "q6o2":req.body.q6o2,
                 "q6o3":req.body.q6o3,
                 "q6o4":req.body.q6o4,

                 "q7":req.body.q7,
                 "q7o1":req.body.q7o1,
                 "q7o2":req.body.q7o2,
                 "q7o3":req.body.q7o3,
                 "q7o4":req.body.q7o4,

                  "q8":req.body.q8,
                 "q8o1":req.body.q8o1,
                 "q8o2":req.body.q8o2,
                 "q8o3":req.body.q8o3,
                 "q8o4":req.body.q8o4,

                 "q9":req.body.q9,
                 "q9o1":req.body.q9o1,
                 "q9o2":req.body.q9o2,
                 "q9o3":req.body.q9o3,
                 "q9o4":req.body.q9o4,

                  "q10":req.body.q10,
                 "q10o1":req.body.q10o1,
                 "q10o2":req.body.q10o2,
                 "q10o3":req.body.q10o3,
                 "q10o4":req.body.q10o4

             }


    });

    mcqSurvey.create(newSurvey, (err, mcqSurvey) => {
      if(err) {
        console.log("ERROR creating survey!!!: "+err);
       return res.end(err);
      } else {
          console.log("Survey created successfully");
        return res.redirect('/survey/userSurveyList');
      }
    });
}

module.exports.viewMCQSurvey = (req,res,next,id) => {

    try {
      // get a reference to the id from the url
      let surveyId = mongoose.Types.ObjectId.createFromHexString(id);

        // find one survey by its id
      mcqSurvey.findById(surveyId, (err, surveys) => {
        if(err) {
          console.log(err);
          return res.end(error);
        } else {
          // show the survey's detailed view
return res.render('surveys/viewMCQSurvey',{
 title:'View Survey',
        user:req.user?req.user.username:'',
        surveys: surveys
});
        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }


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

module.exports.displayTFSurveyTemplate = (req,res,next) => {
     return res.render('surveys/tfSurveyTemplate',{
        title:'Your survey',
        user:req.user?req.user.username:''
    });
}

module.exports.displayTextSurveyTemplate = (req,res,next) => {
    return res.render('surveys/textSurveyTemplate',{
        title:'Your survey',
        user:req.user?req.user.username:''
    });
}