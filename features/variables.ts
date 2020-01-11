//type annotation, telling TS that we will only ever assign a value number to apples
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

//array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false];

//classes
class Car {}

let car: Car = new Car();

//Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
// 1) a function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Type annotaion on different lines, when we declare on one line, and initialize on another

let words = ['red', 'green', 'blue'];
let foundWord: boolean; // also can set to false initially

for (let j = 0; j < words.length; j++) {
  if (words[j] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
