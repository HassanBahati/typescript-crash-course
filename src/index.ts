// Basic types
let id: number = 5;
let company: string = "Hassan Bahati";
let isPublished: boolean = true;
let x: any = "Hello";

//intiialise
let age: number;
age = 30;

//array of numbers
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(4);

//undeclared array
let arr: any[] = [1, true, "hello"];

//Tuple - specify exact types within an array
let person: [number, string, boolean] = [1, "True", true];

// Tuple with arrays
let employee: [number, string][];
employee = [
  [1, "hassan"],
  [3, "bahati"],
];

//  - variable with more than one type
let identification: string | number = 22;
identification = "22";

//Enums(enumerated type) - define a set of named constants- if first is given a value of 1, the rest will count from that
enum Direction1 {
  Up = 4,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
// console.log(Direction2.Up)

//Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

type Car = {
  brand: string;
  price: number;
};
const car: Car = {
  brand: "bmw",
  price: 50,
};

// Type Assertion - tell compiler to treat an entity as a different type
let cid: any = 1;
let customerID = <number>cid;
let customerId = cid as number;

// customerID = 5;

//FUNTCTION
function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(3,5))

//void functions
function log(message: string | number): void {
  console.log(message);
}

// log("hello")

// INTERFACES - custom type || structure to obj or function
interface CarInterface {
  brand: string;
  readonly price: number;
  sold?: true;
}
const car1: CarInterface = {
  brand: "bmw",
  price: 50,
};

// car1.price = 400;

// type and interface do similar thing
// interace would be a preference
// type majorly for  ] primitives and unions
type Point = number | string;
const p1: Point = 1;

//use ? to make ffields optional eg age?: number
// use readonly to prevent re-assigning of values to a field

//interfaces with functions
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

//CLASSES
// constructor run whenever a class is instantiated
// private or protected makes the property only accessible within the class
//public makes properties accessible anywhere, smae as not putting anything

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  //   private id: number;
  //   protected id : number
  // public id : number
  id: number;
  name: string;

  constructor(id: number, name: string) {
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

//adding new fields into a sub-class
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    // super because they are already initilised in the class we are extending
    super(id, name), (this.position = position);
  }
}

const emp = new Employee(3, "Shawn", "Developer")
// console.log(emp.register())
