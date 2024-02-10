
// first variable is not defined because of the way javascript's reads it 
var greet = 'Hello!'; // glabal object
var greet = 'Hola!';

console.log(greet);

var english = { 
    greetings: { 
        basic: 'Hello!' 
    } 
}; // variable with an object
var spanish = {};

english.greet = 'Hello!'; //variables don't collide with each other
spanish.greet = 'Hola!';

console.log(english); //variable becomes a container

// . is an opertator  
