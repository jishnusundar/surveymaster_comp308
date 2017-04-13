let mongoose = require('mongoose');

// model for MCQ survey
let surveySchema = mongoose.Schema({
    title: String,
    type: String,
    author: String,
    lifetime: String,
    created: String,
    active: String,
    questions:{}
},
{
  collection: "surveys"
});

module.exports = mongoose.model('surveySchema', surveySchema);
