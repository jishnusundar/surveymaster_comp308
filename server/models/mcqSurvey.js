let mongoose = require('mongoose');

// model for MCQ survey
let MCQSchema = mongoose.Schema({
    title: String,
    author: String,
    lifetime: int,
    created: Date,
    active: boolean,
    questions:[],
},
{
  collection: "mcqsurvey"
});

module.exports = mongoose.model('mcqSchema', MCQSchema);
