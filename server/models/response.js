let mongoose = require('mongoose');

// model for survey responses
let response = mongoose.Schema({
   surveyId:String,
   answers: {

   }
},
{
  collection: "response"
});

module.exports = mongoose.model('response', response);