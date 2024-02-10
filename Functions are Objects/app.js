function greet() {
    console.log('hi');
}

greet.language = 'english';
// added a property to a function. Functions are objects
console.log(greet.language);
//function has a name "greet" and code "('hi')"