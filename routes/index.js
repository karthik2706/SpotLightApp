var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('My ToDo');
});

/* GET home page. */
router.get('/dev', function(req, res) {
    res.render('Developer ToDo');
});




// if needed, add other REST API end points here 
// router = require('./products.api')(router); 

module.exports = router;
