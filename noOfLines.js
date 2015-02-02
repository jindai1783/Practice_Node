var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var number = buf.toString().split("\n").length - 1;

console.log(number);