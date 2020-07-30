var express = require('express');
var router = express.Router();

const mysql = require('../services/mysql/mysql.js')

// const config = require('../config.js');
// var sqlFlag = config.sqlFlag();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  // console.log(mysql.checkUser(req.body.name, req.body.password))
  // if(mysql.checkUser(req.body.name, req.body.password)) {
    // res.send('Logged in. Thank you.');
  // };
  // res.send('Login failed. Try again.');
  res.redirect('/upload');
});

router.post('/signup', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  mysql.postUser(req.body.name, req.body.password);
  res.send('Signed up. Thank you.');
});

router.get('/checkId', function(req, res, next) {  
  res.send('Hello ' + mysql.checkId(req.query.uuid));
});

module.exports = router;