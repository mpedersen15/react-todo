// function add(a, b){
//   return a + b;
// }
//
// console.log(add(5,3));
//
// var toAdd = [9,7];
//
// console.log(add(...toAdd));

var groupA = ["Jenny", "Ryan"];
var groupB = ["Mike", "Luke"];

var final = [3, ...groupA, ...groupB];

console.log(final);

function greet(name, age){
  console.log(`Hello, I'm ${name} and I'm ${age}`);
}

var person1 = ['Matt', 27];
var person2 = ['Jenny', 25];

greet(...person1);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Matt', ...names];
final.forEach(function(name){
  console.log(name);
});
