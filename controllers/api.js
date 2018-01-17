var express = require('express');
var router = express.Router();

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

module.exports = router;