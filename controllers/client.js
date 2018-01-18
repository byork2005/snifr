var express = require('express');
var router = express.Router();
var passport = require('passport');

var ensureAuth = function(req, res, next){
    console.log("authing");
    if (req.isAuthenticated()){
        console.log("authed");
        return next();
    } else {
        res.redirect('/notAuth');
    }
};

router.get('/', function(req, res){
    var hbsObj = {status: "success"};
    res.render('index', hbsObj);
});

router.get('/signin', function(req, res){
    var hbsObj = {};
    res.render('signin', hbsObj);
});

router.post('/signin',
            passport.authenticate('local-signin', {
                failureRedirect: '/notAuth',
                successRedirect: '/auth'
            }));

router.get('/signup', function(req, res){
    var hbsObj = {};
    res.render('signup', hbsObj);
});

router.post('/signup',
            passport.authenticate('local-signup',
            {
                failureRedirect: '/notAuth',
                successRedirect: '/auth'
            }));
           
router.get('/logout',function(req, res){
    req.session.destroy(function(err){
        if(err) throw err;
        res.redirect('/auth');
    });
});
            
router.get('/notAuth', function(req, res){
    var hbsObj = {};
    res.render('notAuth', hbsObj);
});

router.get('/auth',
            ensureAuth,
            function(req, res){
                console.log("render auth");
                console.log(req.user);
                var hbsObj = {};
                res.render('auth', req.user);
            });

module.exports = router;