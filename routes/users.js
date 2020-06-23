var express = require('express');
var router = express.Router();

const users = require('../services/sqlite/users.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  if(users.checkUser(req.body.name, req.body.password)) {
    res.send('Logged in. Thank you.');
  };
  res.send('Login failed. Try again.');
});

router.post('/signup', function(req, res, next) {
  console.log(JSON.stringify(req.body));
  users.postUser(Math.round(Date.now() / 1000), req.body.name, req.body.password, req.body.city);
  res.send('Signed up. Thank you.');
});

router.get('/checkID', function(req, res, next) {
  console.log("Test - " + users.checkID(req.query.uuid));
  res.send('Hello ' + users.checkID(req.query.uuid));
});

module.exports = router;