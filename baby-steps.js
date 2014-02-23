var input = process.argv;
var answer = 0;
for (var i = 2; i < input.length; i++) {
  answer = answer + Number(input[i]);
};
console.log(answer);