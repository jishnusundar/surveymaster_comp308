//Import model for surveys
let survey = require('../models/surveys');
let response = require('../models/response');
let mongoose = require('mongoose');
var moment = require('moment');

module.exports.displayMCQResponsePage = (req,res,next,id) => {

    try {
      // get a reference to the id from the url
      let surveyId = mongoose.Types.ObjectId.createFromHexString(id);

        // find one survey by its id
      survey.findById(surveyId, (err, surveys) => {
        if(err) {
          console.log(err);
          return res.end(error);
        } else {

          

      if(moment(surveys.lifetime).isAfter(moment().format('MM DD YYYY'))){ //if survey not expired
                  // show the survey's response view
        return res.render('surveys/MCQ/respondMCQ',{
        title: 'Respond to survey',
        user:req.user?req.user.username:'',
        surveys: surveys
        });


      }
      else //if survey expired
      {
        return res.render('surveys/expired',{
        title: 'Survey Expired',
        user:req.user?req.user.username:'',
        });

      }


        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }

}

module.exports.processMCQResponse = (req,res,next,id) => {
  let surveyId = req.params.id;

let newResponse = response({

"surveyId":surveyId,
            "answers": {
              "q1":req.body.q1,
              "q2":req.body.q2,
              "q3":req.body.q3,
              "q4":req.body.q4,
              "q5":req.body.q5,
              "q6":req.body.q6,
              "q7":req.body.q7,
              "q8":req.body.q8,
              "q9":req.body.q9,
              "q10":req.body.q10
            }

});

response.create(newResponse, (err, resp) => {

     if(err) {
        console.log("ERROR creating response!!!: "+err);
       return res.end(err);
      } else {
          console.log("Response created successfully");
        setTimeout(redirectHome,2000);

        function redirectHome() {
          return res.redirect('/');
        }
      }
    });

}

module.exports.identifyResponseSurveyType = (req,res,next) => {
      try {
      // get a reference to the id from the url
      let surveyId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one survey by its id
      survey.findById(surveyId, (err, surveys) => {
        if(err) {
          console.log(err);
          return res.end(error);
        } else {
          //check the survey type and redirect to appropriate route
          if(surveys.type=="MCQ") {
            return res.redirect('/respond/respondMCQ/'+surveyId);

          }
          else if(surveys.type=="TF") {
            return res.redirect('/respond/respondTF/'+surveyId);

          } 
          else if(surveys.type=="QA") {
            return res.end();

          }

        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }

}

module.exports.displayTfResponsePage = (req,res,next) => {
      try {
      // get a reference to the id from the url
      let surveyId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one survey by its id
      survey.findById(surveyId, (err, surveys) => {
        if(err) {
          console.log(err);
          return res.end(error);
        } else {

          

      if(moment(surveys.lifetime).isAfter(moment().format('MM DD YYYY'))){ //if survey not expired
                  // show the survey's response view
        return res.render('surveys/TF/respondTf',{
        title: 'Respond to survey',
        user:req.user?req.user.username:'',
        surveys: surveys
        });


      }
      else //if survey expired
      {
        return res.render('surveys/expired',{
        title: 'Survey Expired',
        user:req.user?req.user.username:'',
        });

      }


        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }
}

module.exports.processTfResponse = (req,res,next) => {
    let surveyId = req.params.id;

let newResponse = response({

"surveyId":surveyId,
            "answers": {
              "q1":req.body.q1,
              "a1":req.body.q1a,

              "q2":req.body.q2,
              "a2":req.body.q2a,

              "q3":req.body.q3,
              "a3":req.body.q3a,

              "q4":req.body.q4,
              "a4":req.body.q4a,

              "q5":req.body.q5,
              "a5":req.body.q5a,

              "q6":req.body.q6,
              "a6":req.body.q6a,

              "q7":req.body.q7,
              "a7":req.body.q7a,

              "q8":req.body.q8,
              "a8":req.body.q8a,
              
              "q9":req.body.q9,
              "a9":req.body.q9a,

              "q10":req.body.q10,
              "a10":req.body.q10a
            }

});

response.create(newResponse, (err, resp) => {

     if(err) {
        console.log("ERROR creating response!!!: "+err);
       return res.end(err);
      } else {
          console.log("Response created successfully");
        setTimeout(redirectHome,2000);

        function redirectHome() {
          return res.redirect('/');
        }
      }
    });

}
