var express = require('express');
var router = express.Router();
var passport = require('passport');

var ensureAuth = function(req, res, next){
    console.log("authing")
    if (req.isAuthenticated()){
        console.log("authed")
        return next();
    } else {
        res.redirect('/notAuth');
    }
};

router.get('/', function(req, res){
    var hbsObj = {status: "success"};
    res.render('index', hbsObj);
});

router.get('/login', function(req, res){
    var hbsObj = {};
    res.render('login', hbsObj);
});

router.post('/login',
            passport.authenticate('local', {
                failureRedirect: '/notAuth',
                successRedirect: '/auth'
            }));
           

            
router.get('/notAuth', function(req, res){
    var hbsObj = {};
    res.render('notAuth', hbsObj);
});

router.get('/auth',
            ensureAuth,
            function(req, res){
                console.log("render auth")
                var hbsObj = {};
                res.render('auth', hbsObj);
            });

module.exports = router;