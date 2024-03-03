var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this ever for demo purposes only 
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);
// jane only has a first name property
var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());