var express = require('express');
var router = express.Router();

const utils = require('../utils/utils.js');

var baseUrl = "https://api.coindesk.com"
var urls = {
  getBTCUSDCurrentPrice: "/v1/bpi/currentprice/usd.json",
  getBTCINRCurrentPrice: "/v1/bpi/currentprice/inr.json",
  getETHUSDCurrentPrice: "/site/headerdata.json?currency=ETH",
  getXRPUSDCurrentPrice: "/site/headerdata.json?currency=XRP"
};

router.get('/', function(req, res, next) {
  res.send('respond with a Coindesk resource');
});

router.get('/getBTCUSDCurrentPrice', function (req, res, next) {
  // console.log(urls.getBTCUSDCurrentPrice);
  var serviceUrl = baseUrl + utils.formatUrl(urls.getBTCUSDCurrentPrice);
  // console.log(serviceUrl);
  utils.makeGetCall(serviceUrl).then(response => {
    // console.log(JSON.stringify(response));
    res.send(response.bpi.USD.rate  + ` ` + response.bpi.USD.code);
  });
});

router.get('/getBTCINRCurrentPrice', function (req, res, next) {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getBTCINRCurrentPrice);
  utils.makeGetCall(serviceUrl).then(response => {
    res.send(response.bpi.INR.rate + ` ` + response.bpi.INR.code);
  });
});

router.get('/getETHUSDCurrentPrice', function (req, res, next) {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getETHUSDCurrentPrice);
  utils.makeGetCall(serviceUrl).then(response => {
    res.send(JSON.stringify(response.bpi.USD.rate_float) + ` ` + response.bpi.USD.code);
  });
});

router.get('/getXRPUSDCurrentPrice', function (req, res, next) {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getXRPUSDCurrentPrice);
  utils.makeGetCall(serviceUrl).then(response => {
    res.send(JSON.stringify(response.bpi.USD.rate_float) + ` ` + response.bpi.USD.code);
  });
});

module.exports = router;
