var fs = require('fs');
var path = require('path');


module.exports = function(dirName, extStr, fn) {
  fs.readdir(dirName, function(err, list) {
    if (err) return console.error(err);

    list.forEach(function(element) {
      if ('js' === path.extname(element).substr(1)) {
        fn(element);
      };
    });
  });
};