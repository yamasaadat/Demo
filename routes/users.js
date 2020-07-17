var express = require('express');
var router = express.Router();

const users = require('../services/sqlite/users.js')
const mysql = require('../services/mysql/mysql.js')

const config = require('../config.js');
var sqlFlag = config.sqlFlag();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  if (sqlFlag == 'mysql') {
    if(mysql.checkUser(req.body.name, req.body.password)) {
      res.send('Logged in. Thank you.');
    };
    res.send('Login failed. Try again.');
  } else {
    if(users.checkUser(req.body.name, req.body.password)) {
      res.send('Logged in. Thank you.');
    };
    res.send('Login failed. Try again.');
  }
});

router.post('/signup', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  if (sqlFlag == 'mysql') {
    mysql.postUser(req.body.name, req.body.password);
    res.send('Signed up. Thank you.');
  } else {
    users.postUser(Math.round(Date.now() / 1000), req.body.name, req.body.password, req.body.city);
    res.send('Signed up. Thank you.');
  }
});

router.get('/checkId', function(req, res, next) {
  if (sqlFlag == 'mysql') {
    console.log("Test - " + mysql.checkId(req.query.uuid));
    res.send('Hello ' + mysql.checkId(req.query.uuid));
  } else {
    console.log("Test - " + users.checkId(req.query.uuid));
    res.send('Hello ' + users.checkId(req.query.uuid));
  }
});

module.exports = router;