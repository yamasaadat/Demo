const fs = require('fs');

exports.uploadFile = (file) => {

    return new Promise(function(resolve, reject) {
        
        fs.readFile(file, function (err, data) {

            if (err) {
                console.log("There was an error")
                reject(false);
            } else {    

                var newPath = process.cwd() + "/uploads/" + file;

                fs.writeFile(newPath, data, function (err) {
                    if (err) {
                        console.error(err);
                        reject(false);
                    } else {
                        resolve (true);
                    }
                    // res.redirect(process.cwd() + "/uploads/" + file);
                });
            }
        });
    });
};