function Person(firstname, lastname) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');

}
// jane and john will get access to this prototype
// better to put objects on prototypes 
Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function () {
    return this.lastname + ' ' + this.firstname;
}

console.log(john.getFormalFullName());