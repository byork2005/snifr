var express = require('express');
var router = express.Router();
var passport = require('passport');

var ensureAuth = function(req, res, next){
    console.log("authing");
    if (req.isAuthenticated()){
        console.log("authed");
        return next();
    } else {
        res.redirect('/');
    }
};

router.get('/', function(req, res){
    var hbsObj = {status: "success"};
    //res.render('index', hbsObj);
    res.sendfile('./views/templates/login.html')
});

router.get('/profile', ensureAuth, function(req, res){
    res.sendfile('./views/templates/profile.html')
})

router.get('/signin', function(req, res){
    var hbsObj = {};
    res.render('signin', hbsObj);
});

router.get('/survey1', function(req, res){
    res.sendfile('./views/templates/survey1.html');
});

router.get('/survey2', ensureAuth, function(req, res){
    res.sendfile('./views/templates/survey2.html');
})

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
                failureRedirect: '/signup/failure',
                successRedirect: '/signup/success'
            }));

router.get('/signup/:worked', ensureAuth, function(req, res){
    let status = req.params.worked
    res.json({signup: status});
})
           
router.get('/logout',function(req, res){
    req.session.destroy(function(err){
        if(err) throw err;
        res.redirect('/auth');
    });
});
            
router.get('/notAuth', function(req, res){
    var hbsObj = {};
    //res.render('notAuth', hbsObj);
    res.json({authorized: "NO"})
});

router.get('/auth',
            ensureAuth,
            function(req, res){
                console.log("render auth");
                console.log(req.user);
                var hbsObj = {};
                //res.render('auth', req.user);
                res.json({authorized: "YES"})
            });

module.exports = router;