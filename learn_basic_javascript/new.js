function add(a, b) {
  return a + b
}

console.log(add(4, 6));
console.log();

var sum = 0;
function addSum(num) {
  sum = sum + num;
  return sum;
}

addSum(3);
console.log(addSum(3));
console.log()

console.log(typeof 3);
console.log(typeof '3');
console.log()

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

console.log(ourArray);
console.log();

var anotherArray = [];
var i = 5;
while (i < 5) {
  anotherArray.push(i);
  i++;
}

console.log(anotherArray);
console.log()

var nextArray = [];
var i = 5;
do {
  nextArray.push(i);
  i++;
} while (i < 5);

console.log(nextArray);
console.log()
