var input = process.argv[2];
var fs = require('fs');
var buffer = fs.readFileSync(input);
var answer = buffer.toString().split('\n').length - 1
console.log(answer);