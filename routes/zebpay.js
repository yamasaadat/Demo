// .service('zebpayService', function ($http, $rootScope) {

//     var baseUrl = "https://www.zebapi.com/api/v1"
//     var urls = {
//       getBTCINRCurrentPrice: "/market/ticker/btc/inr"
//     };

//     function format() {
//       var args = arguments[0];
//       for (var i = 0; i < arguments.length - 1; i++) {
//         var reg_exp = new RegExp("\\{" + i + "\\}");
//         args = args.replace(reg_exp, arguments[i + 1]);
//       }
//       $rootScope.lastExecutedCall = args;
//       return args;
//     }

//     function makeGetCall(serviceUrl) {
//       return $http.get(serviceUrl)
//         .then(function (response) {
//           response.data.url = serviceUrl;
//           return response;
//         }, function (err) {
//           if (err) {
//             return err;
//           }
//         }).then(returnData)
//         .then(function (data) {
//           return data;
//         })
//     }

//     function returnData(res) {
//       if (res.data) {
//         return res.data;
//       }
//       else {
//         res.data = null;
//         return res.data;
//       }
//       //throw new Error('Return data error ... ');
//     }

//     return {
//       getBTCINRCurrentPrice: function () {
//         var serviceUrl = baseUrl + format(urls.getBTCINRCurrentPrice);
//         return makeGetCall(serviceUrl);
//       }
//     }
//   })