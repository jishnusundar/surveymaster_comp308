let express = require('express');
let router = express.Router();

router.get('/userSurveyList',(req,res,next)=>{
    res.render('surveys/userSurveyList',{
        title:'Your surveys'
    });
});

module.exports = router;