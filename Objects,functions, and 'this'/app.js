console.log(this)
// inside browser 'this' will refer to the window object 

function a() {
    console.log(this)
    this.newvariable = 'hello';
}

a();
// when you create a function the this is still going to point at the global object

var b = function() {
    console.log(newvariable);
}

a();
b();

var b = function () {
    console.log(this);
}
a();
console.log(newvariable);

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        this.name = 'Updated c object';
        console.log(this);

        var setname = function(newname) {
            this.name = newname;
        }
        setname('update again! The c object');
        console.log(this);
    }
}

c.log(); 
