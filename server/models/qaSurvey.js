let mongoose = require('mongoose');

// model for Question and answer type survey
let qaSchema = mongoose.Schema({
    title: String,
    author: String,
    lifetime: int,
    created: Date,
    active: boolean,
    questions:[],
},
{
  collection: "qasurvey"
});

module.exports = mongoose.model('qaSchema', qaSchema);
