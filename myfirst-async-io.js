var file = process.argv[2];
var fs = require('fs');
fs.readFile(file, function(error, contents) {
  var lines = contents.toString().split('\n').length - 1
  console.log(lines);
});
// var callbackFunc = function callback(error, data) {
//   if (error) {
//     throw error;
//   } else {
//     console.log(data.toString().split('\n').length - 1);
//   }
// }
// var strbuf = fs.readFile(file, 'utf8', callbackFunc);