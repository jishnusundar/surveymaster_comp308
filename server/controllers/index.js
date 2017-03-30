module.exports.displayHome = (req,res,next) => {
     return res.render('home',{
        title:"Welcome to Survey Master",
        messages: req.flash('loginMessage')
    });
}



