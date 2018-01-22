var express = require('express');
var router = express.Router();
var models = require('../models')

var ensureAuth = function(req, res, next){
    console.log("authing");
    if (req.isAuthenticated()){
        console.log("authed");
        return next();
    } else {
        res.status(401).json({message: 'Access Denied'});
    }
};

router.get('/users', ensureAuth, function(req, res){
    res.json({status: "success"});
});

router.post('/dogs', ensureAuth, function(req, res){
    console.log(req.body)
    let newDog = req.body;
    newDog["UserId"] = req.user.id;
    console.log(newDog);
    models.Dog.create(newDog).then(resp => {
        console.log(resp.get());
        res.json({status: "success"})
    })
})

module.exports = router;