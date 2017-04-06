let mongoose = require('mongoose');

// model for Question and answer type survey
let tfSchema = mongoose.Schema({
    title: String,
    author: String,
    lifetime: int,
    created: Date,
    active: boolean,
    questions:[],
},
{
  collection: "tfsurvey"
});

module.exports = mongoose.model('tfSchema', tfSchema);
