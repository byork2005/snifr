var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    var hbsObj = {status: "success"};
    res.render('index', hbsObj);
});

module.exports = router;