function uploadFileToS3() {
	var file = document.getElementById('s3-upload').files[0];
	alert("Hello");
	console.log(file);
        // Read content from the file
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log(evt.target.result);
                fileContent = evt.target.result;
            }
            reader.onerror = function (evt) {
                console.log("error reading file");
                reject(false);
            }
        }
}

