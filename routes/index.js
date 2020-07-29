var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trend Micro Cloud One - Application Security Demo' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Trend Micro Cloud One - Application Security Demo' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'Trend Micro Cloud One - Application Security Demo' });
});

router.get('/links', function(req, res, next) {
  res.render('links', { title: 'Trend Micro Cloud One - Application Security Demo' });
});

router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Trend Micro Cloud One - Application Security Demo' });
});

module.exports = router;
