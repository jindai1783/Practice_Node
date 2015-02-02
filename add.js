// var input = process.argv;

// input.shift();
// input.shift();

// var sum = 0;

// input.forEach(function(element) {
//   sum += Number(element);
// });

// console.log(sum);


var result = 0;

for (i = 2; i < process.argv.length; i++)
  result += Number(process.argv[i]);

console.log(result);