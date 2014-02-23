var urls = process.argv.slice(2),
    http = require('http'),
    stream = require('stream'),
    bl = require('bl'),
    answer = [],
    object = {};

urls.forEach(function(element, index) {
  object[index] = element;
})

for (var i = 0; i < urls.length - 1; i++) {
  http.get(urls[i], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)
      data = data.toString()
      if (object[i] == urls[i]) {
        object[i] = data;
        console.log(object)
      };
    }))
  });
};
