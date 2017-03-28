module.exports.displayHome = (req,res,next) => {
     res.render('home',{
        title:"Welcome to Survey Master"
    });
}