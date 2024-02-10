// putting function in memory. 
greet();

// hoisting you're creating a function here and It'll put it into memory
function greet() {
    console.log('hi');
}
// an expresion that results in a value. Variable is placed in memory first 
var anonymousGreet = function() {
    console.log('hi');
}
anonymousGreet();

// an equals operator putting the object in memory
// the function does not have a name however does have an object.
// puts variables in memory first 

function log(a) {
    console.log(a);
}

log(fuction() {
    console.log('hi');
});
