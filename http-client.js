var url = process.argv[2],
    http = require('http'),
    stream = require('stream'),
    response = http.get(url, callback);

function callback(response) {
  response.on("data", function(data) {
    console.log(data.toString());
  });
}