//Import model for surveys
let mcqSurvey = require('../models/mcqSurvey');
let response = require('../models/response');
let mongoose = require('mongoose');

module.exports.displayResponsePage = (req,res,next,id) => {

    try {
      // get a reference to the id from the url
      let surveyId = mongoose.Types.ObjectId.createFromHexString(id);

        // find one survey by its id
      mcqSurvey.findById(surveyId, (err, surveys) => {
        if(err) {
          console.log(err);
          return res.end(error);
        } else {
          // show the survey's response view
return res.render('surveys/respondMCQ',{
 title: 'Respond to survey',
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

module.exports.processResponse = (req,res,next,id) => {
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
        return res.redirect('/respond/thankYou');
      }
    });

}
