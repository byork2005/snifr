var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){
    res.json({status: "success"});
});

module.exports = router;