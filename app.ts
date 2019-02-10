// tuples
const tuplesArray: [string, number] = ['Hello', 100];
console.log(tuplesArray);

// enums
const enum Color {
  Red,
  Green,
  Blue
}
const myColor: Color = Color.Blue;
console.log(myColor);

const Nikolay: { name: string; age: number | string; sayHello: () => void } = {
  name: 'Nikolay',
  age: 27,
  sayHello: () => console.log('Hello')
};

// Return the name
function returnName(): string {
  return Nikolay.name;
}
// Print the name
function sayName(): void {
  console.log(Nikolay.name);
}

// Argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(1, 2));

let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;

type Complex = { data: number[]; output: (all: boolean) => number[] };

const complex: Complex = {
  data: [1, 2, 3, 4, 5],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealAge: number | string = 27;
myRealAge = '27';

if (typeof myRealAge === 'string') {
  console.log('The type of variable is string');
} else if (typeof myRealAge === 'number') {
  console.log('The type of variable is number');
}

// never
function neverReturns(): never {
  throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canBeAny = null;
// canBeAny = 12;

// Default parameters
const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log('Done', start);
};
countdown();

// Rest and spread
const numbers = [1, 10, 88, 9, -2, -5];
console.log(Math.max(...numbers));
function makeArray(name: string, ...args: [string, number, object]) {
  return args;
}
makeArray('Nikolay', 'string', 33, { hello: 'there' });
