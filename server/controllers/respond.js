//Import model for surveys
let mcqSurvey = require('../models/mcqSurvey');
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
 title: surveys.title,
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