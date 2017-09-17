var eventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, eventEmitter);

var p = new Person("Ram");

p.on('speak', function (said) {
    console.log(`${this.name} says ${said}`)
});

p.emit('speak', "Hello people, do ot waste time!!");