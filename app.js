"use strict";
// tuples
var tuplesArray = ['Hello', 100];
console.log(tuplesArray);
var myColor = 2 /* Blue */;
console.log(myColor);
var Nikolay = {
    name: 'Nikolay',
    age: 27,
    sayHello: function () { return console.log('Hello'); }
};
// Return the name
function returnName() {
    return Nikolay.name;
}
// Print the name
function sayName() {
    console.log(Nikolay.name);
}
// Argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(1, 2));
var myMultiply;
myMultiply = multiply;
var complex = {
    data: [1, 2, 3, 4, 5],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge = 27;
myRealAge = '27';
if (typeof myRealAge === 'string') {
    console.log('The type of variable is string');
}
else if (typeof myRealAge === 'number') {
    console.log('The type of variable is number');
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canBeAny = null;
// canBeAny = 12;
// Default parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done', start);
};
countdown();
// Rest and spread
var numbers = [1, 10, 88, 9, -2, -5];
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
makeArray('Nikolay', 'string', 33, { hello: 'there' });
// Destructuring array
var hobbies = ['Cooking', 'Sports'];
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log(hobby1, hobby2);
// Destructuring object
var userData = { username: 'Nikolay', age: 27 };
var username = userData.username, age = userData.age;
var myusername = userData.username, newage = userData.age;
//# sourceMappingURL=app.js.map