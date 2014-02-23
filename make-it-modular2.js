var mymodule = require('./make-it-modular1.js');
var dir = process.argv[2];
var fileext = process.argv[3];

function callback(err, data) {
  if (err) {
    return callback(err);
  }
  data.forEach(function(element, index, array) {
    console.log(element);
  });
}

mymodule(dir, fileext, callback);