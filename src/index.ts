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

//Unions - variable with more than one type
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
