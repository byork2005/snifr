var express = require('express');
var router = express.Router();
var passport = require('passport');
var models = require('../models');
var Sequelize = require('sequelize');

var sequelize = new Sequelize("snifrdev", "snifrdev", "Iz4OA~!snolU", {
    host: "den1.mysql1.gear.host",
    dialect: "mysql",
    logging: function () { },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});



var ensureAuth = function (req, res, next) {
    console.log("authing");
    if (req.isAuthenticated()) {
        console.log("authed");
        return next();
    } else {
        res.redirect('/');
    }
};

//handlebars
//routes for the websites, this is all tenative
//removed the ensureAuth to get working
router.get('/', function (req, res) {
    var hbsObj = {
        status: "success",
        showAbout: true
    };
    //res.render('index', hbsObj);

    res.render('login', hbsObj);
});

router.get('/user', function (req, res) {
    res.render('signupHumanInfo');
});

router.get('/user/:userId/dog', function (req, res) {
    res.render('signupDogInfo');
});

router.post('/user/:userId/dog', function (req, res) {
    console.log(req.body)
    let newDog = req.body;
    newDog["UserId"] = req.user.id;
    console.log(newDog);
    models.Dog.create(newDog).then(resp => {
        console.log(resp.get());
        res.json({ status: "success", dogId: resp.id });
    });
});

router.get('/user/:userId/dog/:dogId/survey', function (req, res) {
    res.render('signupSurvey');
});

router.post('/user/:userId/dog/:dogId/survey', function (req, res) {
    let newSurvey = req.body;
    newSurvey["DogId"] = req.params.dogId;
    models.Survey.create(newSurvey).then(resp => {
        res.json({
            status: "success",
            userId: req.params.userId,
            dogId: req.params.dogId
        });
    })
});

router.get('/user/:userId/dog/:dogId/filter', function (req, res) {
    res.render('signupFilters');
});

router.post('/user/:userId/dog/:dogId/filter', function (req, res) {
    let newFilter = req.body;
    newFilter["DogId"] = req.params.dogId;
    models.Filter.create(newFilter).then(resp => {
        res.json({ status: "success" });
    });
});

router.get('/home/:userId', function (req, res) {
    models.Dog.findAll({
        where: {
            id: req.params.userId
        }
    }).then(function (data) {
        res.render('homePage', { Dog: data });
    });
});

router.get('/matches/:userId', function (req, res) {
    user = req.params.userId;
    matchQuery = "select a.id as yourDog, b.id as matchDog, d.name as dogName, d.photo as dogPhoto, d.breed as dogBreed, abs(a.q1 - b.q1) + abs(a.q2 - b.q2) + abs(a.q3 - b.q3)+ abs(a.q4 - b.q4)+ abs(a.q5 - b.q5)+ abs(a.q6 - b.q6)+ abs(a.q7 - b.q7)+ abs(a.q8 - b.q8)+ abs(a.q9 - b.q9)+ abs(a.q10 - b.q10) as scorediff from surveys a inner join surveys b on b.id != a.id inner join dogs d on d.id = b.DogId where a.id=" + user + " order by scorediff asc";
    // console.log(matchQuery);
    sequelize.query(matchQuery, req.params.userId).spread((results, metadata) => {
        //       //math for % of match - wasn't able to push to page but works  
        //     // var diff = results[i].scorediff;
        //     // console.log(diff)
        //     // var math = 100-((diff/40)*100);
        //     // console.log(math);
        // console.log("all done");
        res.render('matchPage', { Match: results });
        // console.log(results);
    });

});

router.get('/profile/:userId', function (req, res) {
    models.Dog.findAll({
        where: {
            id: req.params.userId
        }
    }).then(function (data) {
        res.render('profile', { Profile: data });
    });
});

router.get('/barks', function (req, res) {
    res.render('barksPage')
})
//end of handlebars routes

router.get('/signin', function (req, res) {
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

router.get('/signup', function (req, res) {
    var hbsObj = {};
    res.render('signup', hbsObj);
});

router.post('/signup',
    passport.authenticate('local-signup',
        {
            failureRedirect: '/signup/failure',
            successRedirect: '/signup/success'
        }));

router.get('/signup/:worked', ensureAuth, function (req, res) {
    let status = req.params.worked
    res.json({ signup: status, user: req.user.id });
})

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) throw err;
        res.redirect('/auth');
    });
});

router.get('/notAuth', function (req, res) {
    var hbsObj = {};
    //res.render('notAuth', hbsObj);
    res.json({ authorized: "NO" })
});

router.get('/auth',
    ensureAuth,
    function (req, res) {
        console.log("render auth");
        console.log(req.user);
        var hbsObj = {};
        //res.render('auth', req.user);
        res.json({ authorized: "YES" })
    });

module.exports = router;