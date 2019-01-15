'use strict';

// Constructor for Greeter objects
function Greeter(name) {
    this.name = name;
}

Greeter.prototype.speak = function() {
    console.log("Hello, " + this.name + "!");
}

exports.Greeter = Greeter; // export the Greeter "class"
