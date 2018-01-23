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

//handlebars
//routes for the websites, this is all tenative
//removed the ensureAuth to get working
router.get('/', function(req, res){
    var hbsObj = {status: "success",
                showAbout: true};
    //res.render('index', hbsObj);
    res.render('login', hbsObj);
});

router.get('/signup1', function(req, res){
    res.render('signupHumanInfo');
});

router.get('/signup2', function(req, res){
    res.render('signupDogInfo');
});

router.get('/signup3', function(req, res){
    res.render('signupSurvey');
});

router.get('/signup4', function(req, res){
    res.render('signupFilters');
});

router.get('/home', function(req, res){
    res.render('homePage');
});

router.get('/matches', function(req, res){
    res.render('matchPage');
});

router.get('/profile', function(req, res){
    res.render('profile')
})

router.get('/barks', function(req, res){
    res.render('barksPage')
})
//end of handlebars routes

router.get('/signin', function(req, res){
    var hbsObj = {};
    res.render('signin', hbsObj);
});


//older routes before handlebars
// router.get('/survey1', function(req, res){
//     res.sendfile('./views/templates/survey1.html');
// });

// router.get('/survey2', ensureAuth, function(req, res){
//     res.sendfile('./views/templates/survey2.html');
// })

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