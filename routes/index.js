var express = require('express');
var router = express.Router({caseSensitive: true, strict: true});
var inventors = require("../inventors.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/inventors", function(req,res,next){
    //res.send(inventors[0].first);
    res.render("inventors", {inventors : inventors});
});

module.exports = router;
