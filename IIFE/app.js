// function statement
function greet(name) {
    console.log('Hello ' + name);
}
//have to invoke it so that it'll run
greet('John');

//using a function expression
var greetFun = function(name){
    console.log('Hello ' + name);
}
greetFun('greeting');


//using an Immediately Invoked Function Expression (IIEF)
//var greeting = function(name) {
  //  console.log('Hello ' + name);
//};
//console.log(greeting('John'));
var firstname = 'John';

(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname)); 