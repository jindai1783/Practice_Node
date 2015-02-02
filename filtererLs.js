var fs = require('fs');
var path = require('path');

function callback(err, list) {
  if (err) return console.error(err);

  list.forEach(function(element) {
    if (process.argv[3] === path.extname(element).substr(1)) return console.log(element);
  });
}

fs.readdir(process.argv[2], callback);