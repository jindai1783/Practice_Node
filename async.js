var fs = require('fs');

function getNoOfLines(err, data) {
  if (err) return console.error(err);
  number = data.toString().split("\n").length - 1;
  console.log(number);
}

fs.readFile(process.argv[2], getNoOfLines);