let mongoose = require('mongoose');

// model for MCQ survey
let MCQSchema = mongoose.Schema({
    title: String,
    author: String,
    lifetime: String,
    created: Date,
    active: String,
    questions:{}
},
{
  collection: "mcqsurvey"
});

module.exports = mongoose.model('mcqSchema', MCQSchema);
