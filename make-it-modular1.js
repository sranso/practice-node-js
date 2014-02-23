var fs = require('fs');
var path = require('path');

module.exports = function(dir, fileext, callback) {
  var array = [];
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) == '.' + fileext) {
        array.push(list[i]);
      };
    };
    callback(null, array);
  });
}