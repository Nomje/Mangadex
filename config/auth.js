module.exports = function isloggedIn(req,res,next){
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}