var filter = require('./filterModule.js');

function logging(element) {
  console.log(element);
}

filter(process.argv[2], process.argv[3], logging);