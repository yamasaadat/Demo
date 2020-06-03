const fs = require('fs');
var aws = require('aws-sdk');
var s3 = new aws.S3({apiVersion: '2006-03-01'});

exports.uploadFile = (fileName) => {
    
    return new Promise(function (resolve, reject) {

    	// Read content from the file
    	const fileContent = fs.readFileSync(fileName);

    	// Setting up S3 upload parameters
    	const params = {
		Bucket: 'arn:aws:s3:us-east-2:666402644145:accesspoint/cloudone-accesspoint',
        	Key: fileName,
        	Body: fileContent
    	};

        // Uploading files to the bucket
        s3.upload(params, function(err, data) {
            if (err) {
                console.error(err);
                reject(false);
            } else {
                // console.log(`File uploaded successfully. ${data.Location}`);
                resolve(true);
            }
        });
    });
};
