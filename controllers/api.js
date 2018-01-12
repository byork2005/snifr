var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var hbsObj = {status: "success"};
    res.render('index', hbsObj);
});

router.get('/api/users', function(req, res){
    res.json({status: "success"});
});

module.exports = router;