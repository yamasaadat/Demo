var express = require('express');
var router = express.Router();

var fs = require('fs');
var download = require('download');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage });

const ftpDeploy = require('../services/ftp-deploy/ftp-deploy.js');

// const fileClient = require('../services/file-storage/file-storage.js');
// const azBlobCient = require('../services/azure-blob/azure-blob.js');

router.post('/fileUploadToServer', upload.single('upload'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  console.log(file);
  ftpDeploy.ftpUpload(req.file)
  res.redirect('/upload');
})

router.get('/eicar.com', function (req,res) {
  download('https://secure.eicar.org/eicar.com', 'downloads');
  console.log("download should be in progress!!!");
  res.send("download should be in progress!!!");
  // console.log(JSON.stringify(res));
  // const file = req.file
  // if (!file) {
  //   const error = new Error('Please upload a file')
  //   error.httpStatusCode = 400
  //   return next(error)
  // }
  //   res.json(file);  
});

// router.post('/fileUploadToAzBlob', function(req, res, next) {
//   if(azBlobClient.uploadFile(req.body.upload)) {
//     res.send('File Uploaded. Thank you.');
//     console.log("File Uploaded");
//   };
//   res.send('Upload failed. Try again.');
// });

module.exports = router;
