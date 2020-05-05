var http = require('axios');

exports.cleanNumbers = (num) => {
    if (typeof num == "string" && num != null) {
        num = num.replace(",", "");
        num = parseFloat(num);
    }
    return num;
}

exports.todayAsDDMMYYYY = (epoch_timestamp) => {
    if (epoch_timestamp !== undefined) {
        let date = new Date(epoch_timestamp * 1000);
        return ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
    }
    let now = new Date();
    return ("0" + now.getUTCDate()).slice(-2) + "-" + ("0" + (now.getUTCMonth() + 1)).slice(-2) + "-" + now.getUTCFullYear();
}

exports.formatUrl = (url) => {
    if (url.includes("{") && url.includes("}")) {
        // console.log("Arguments : " + arguments[0] + " - " + arguments.length + " - " + url);
        var args = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg_exp = new RegExp("\\{" + i + "\\}");
            args = args.replace(reg_exp, arguments[i + 1]);
        }
        // $rootScope.lastExecutedCall = args;
        // console.log(args);
    }
    return url;
}

exports.makeGetCall = (serviceUrl) => {
    // console.log(serviceUrl);
    return http.get(serviceUrl)
        .then(function (response) {
            response.data.url = serviceUrl;
            return response;
        }, function (err) {
            if (err) {
                return err;
            }
        }).then(returnData)
        .then(function (data) {
            return data;
        })
}

function returnData (res) {
    if (res.data) {
        return res.data;
    }
    else {
        res.data = null;
        return res.data;
    }
    //throw new Error('Return data error ... ');
}

// function runQuery(query, dataParams, successCb, errorCb) {  
//   if (db != undefined)
//   {
//     websql.execute(db, query, dataParams).then(function (res) {
//       successCb(res);
//       //console.log("SQL Query successful");
//     }, function (err) {
//       errorCb(err);
//       console.log("SQL Query failure");
//     });
//   }
//   else {
//     console.log("SQL DB unreachable or does not exist.")
//   }  
// };

// function returnObjFromSqlResultSet(sqlResultSet) {
//   var objArr = [];
//   if (sqlResultSet.rows.length > 0) {
//     var objKeys = Object.keys(sqlResultSet.rows.item(0));
//     for (var i = 0; i < sqlResultSet.rows.length; i++) {
//       var jsonObj = {}; // Object
//       for (var j = 0; j < objKeys.length; j++) {
//         jsonObj[objKeys[j]] = sqlResultSet.rows.item(i)[objKeys[j]];
//       }
//       objArr.push(jsonObj);
//     }
//     return objArr;
//   }
// }

// roundTo: function (n, digits) {
    //         if (n !== undefined) {
    //           if (digits === undefined) {
    //             digits = 0;
    //           }
    //           if (n == null) {
    //             return n;
    //           }
    //           var multiplicator = Math.pow(10, digits);
    //           n = parseFloat((n * multiplicator).toFixed(11));
    //           var test = (Math.round(n) / multiplicator);
    //           return +(test.toFixed(digits));
    //         }
    //       },

    //       parseDataIntoArrays: function (res) {
    //         if (res != null) {
    //           var keyIndex = [];
    //           for (name in res[0]) {
    //             keyIndex.push(name);
    //           }
    //           var dataArrays = [];
    //           for (var index = 0; index < keyIndex.length; index++) {
    //             var Arr = []
    //             for (var i = 0; i < res.length; i++) {
    //               for (val in res[i]) {
    //                 if (val == keyIndex[index]) {
    //                   Arr.push(res[i][val]);
    //                 }
    //               }
    //             }
    //             dataArrays.push(Arr);
    //           }
    //           return dataArrays
    //         }
    //       },

    //       flipData: function (arr) {
    //         arr = arr.reverse();
    //         return arr;
    //       },

    //       threadDataArrays: function (arr1, arr2) {
    //         console.log("Array1");
    //         console.log(arr1);
    //         console.log("Array2");
    //         console.log(arr2);
    //         arrayOfArrays = [];
    //         arrayOfArrays.push(arr1);
    //         arrayOfArrays.push(arr2);
    //         console.log(arrayOfArrays);
    //         return arrayOfArrays;
    //       },