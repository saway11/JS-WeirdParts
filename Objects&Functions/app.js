// how to create a new object
var person = new Object();

// short cut to create an object. Object with two properties
var person= { 
    firstname: 'Tony', 
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};
// value pairs seperated by ;
function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony)

greet({
    firstname: 'Mary',
    lastname: 'Doe'
});

Tony.address2= {
    street: '333 second st.'
}
// console.log(person);


