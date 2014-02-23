var url = process.argv[2],
    http = require('http'),
    stream = require('stream'),
    // response = http.get(url, callback),
    bl = require('bl');

http.get(url, function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
// function callback (response) {
//   var num = 0;
//   response.pipe(bl(function (err, data) {
//     console.log(data.toString().split('').length);
//     console.log(data.toString());
//   }));
// }