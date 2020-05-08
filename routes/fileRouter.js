var express = require('express');
var router = express.Router();

const s3Client = require('../services/s3/s3.js');
const fileClient = require('../services/file-storage/file-storage.js');
// const azBlobCient = require('../services/azure-blob/azure-blob.js');

router.post('/fileUploadToS3', function(req, res, next) {
  return s3Client.uploadFile(req.body.upload).then (function (result) {
    res.send('File Uploaded. Thank you.');
  }, function (err) {
    res.send('Upload failed. Try again.');
  });
});

router.post('/fileUploadToServer', function(req, res, next) {
  return fileClient.uploadFile(req.body.upload).then (function (result) {
    res.send('File Uploaded. Thank you.');
  }, function (err) {
    res.send('Upload failed. Try again.');
  });
});

// router.post('/fileUploadToAzBlob', function(req, res, next) {
//   if(azBlobClient.uploadFile(req.body.upload)) {
//     res.send('File Uploaded. Thank you.');
//     console.log("File Uploaded");
//   };
//   res.send('Upload failed. Try again.');
// });

module.exports = router;