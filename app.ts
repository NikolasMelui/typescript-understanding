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

const Nikolay: { name: string; age: number } = {
  name: 'Nikolay',
  age: 27
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
