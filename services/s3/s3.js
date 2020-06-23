const fs = require('fs');
var aws = require('aws-sdk');
var s3 = new aws.S3({apiVersion: '2006-03-01'});

exports.uploadFile = (fileName) => {
    
    return new Promise(function (resolve, reject) {
	console.log(fileName);
    	// Read content from the file
    	const fileContent = fs.readFileSync(fileName);
	console.log(fileContent);

    	// Setting up S3 upload parameters
    	const params = {
		Bucket: 'cloudonedemo',
        	Key: fileName,
        	Body: fileContent
    	};

        // Uploading files to the bucket
        s3.upload(params, function(err, data) {
            if (err) {
                console.error(err);
                reject(false);
            } else {
                console.log(`File uploaded successfully. ${data.Location}`);
                resolve(true);
            }
        });
    });
};
