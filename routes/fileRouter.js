var express = require('express');
var router = express.Router();

const s3Client = require('../services/s3/s3.js');

router.post('/fileUpload', function(req, res, next) {
    if(s3Client.uploadFile(req.body.upload)) {
      res.send('File Uploaded. Thank you.');
    };
    res.send('Upload failed. Try again.');
  });

module.exports = router;