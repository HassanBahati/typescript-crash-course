"use strict";
// Basic types
let id = 5;
let company = "Hassan Bahati";
let isPublished = true;
let x = "Hello";
//intiialise
let age;
age = 30;
//array of numbers
let ids = [1, 2, 3, 4, 5];
ids.push(4);
//undeclared array
let arr = [1, true, "hello"];
//Tuple - specify exact types within an array
let person = [1, "True", true];
// Tuple with arrays
let employee;
employee = [
    [1, "hassan"],
    [3, "bahati"],
];
//  - variable with more than one type
let identification = 22;
identification = "22";
//Enums(enumerated type) - define a set of named constants- if first is given a value of 1, the rest will count from that
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 4] = "Up";
    Direction1[Direction1["Down"] = 5] = "Down";
    Direction1[Direction1["Left"] = 6] = "Left";
    Direction1[Direction1["Right"] = 7] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2.Up)
//Objects
const user = {
    id: 1,
    name: "John",
};
const car = {
    brand: "bmw",
    price: 50,
};
// Type Assertion - tell compiler to treat an entity as a different type
let cid = 1;
let customerID = cid;
let customerId = cid;
// customerID = 5;
//FUNTCTION
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(3,5))
//void functions
function log(message) {
    console.log(message);
}
const car1 = {
    brand: "bmw",
    price: 50,
};
const p1 = 1;
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const mike = new Person(1, "Mike");
const james = new Person(6, "James");
//methods in classes
// console.log(mike.register());
//error because id is private
// mike.id = 5;
// console.log(mike, james);
//adding new fields into a class
class Employee extends Person {
    constructor(id, name, position) {
        // super because they are already initilised in the class we are extending
        super(id, name), (this.position = position);
    }
}
const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());
