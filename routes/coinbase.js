var express = require('express');
var router = express.Router();

var utils = require('../utils/utils.js');

var baseUrl = "http://localhost:8110";
var urls = {
  getBTCUSDBuyPrice: '/getBTCUSDBuyPrice',
  getLTCUSDBuyPrice: '/getLTCUSDBuyPrice',
  getETHUSDBuyPrice: '/getETHUSDBuyPrice',
  getBTCUSDSellPrice: '/getBTCUSDSellPrice',
  getLTCUSDSellPrice: '/getLTCUSDSellPrice',
  getETHUSDSellPrice: '/getETHUSDSellPrice'
};

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a Coinbase resource');
});

router.get('/getBTCUSDBuyPrice', function () {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getBTCUSDBuyPrice);
  return utils.makeGetCall(serviceUrl);
});
router.get('/getLTCUSDBuyPrice', function () {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getLTCUSDBuyPrice);
  return utils.makeGetCall(serviceUrl);
});
router.get('/getETHUSDBuyPrice', function () {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getETHUSDBuyPrice);
  return utils.makeGetCall(serviceUrl);
});
router.get('/getBTCUSDSellPrice', function () {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getBTCUSDSellPrice);
  return utils.makeGetCall(serviceUrl);
});
router.get('/getLTCUSDSellPrice', function () {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getLTCUSDSellPrice);
  return utils.makeGetCall(serviceUrl);
});
router.get('/getETHUSDSellPrice', function () {
  var serviceUrl = baseUrl + utils.formatUrl(urls.getETHUSDSellPrice);
  return utils.makeGetCall(serviceUrl);
});

module.exports = router;
