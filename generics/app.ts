// Simple Generic
const echo = (data: any): any => data;

console.log(echo('Nikolay'));
console.log(echo(27));
console.log(echo({ name: 'Nikolay', age: 27 }));

// Better Generic
const betterEcho = <T>(data: T) => data;
console.log(betterEcho<string>('Nikolay'));

// console.log(betterEcho<string>(27)); // It will be an error here
console.log(betterEcho(27)); // Automatical generic type definer

// Built-in Generics
const testResults: Array<number> = [1, 2, 3, 4, 5]; // Built-in Array Generic Type
testResults.push(6, 7, 8, 9, 10); // We can push the typed data in the Generic typed array
// testResults.push('hello'); // But can't doing it with another type

// Array
// const printAll = <T>(args: T[]) => args.forEach(arg => console.log(arg));
const printAll = <T>(args: T[]) => args.forEach(arg => console.log(arg));
printAll<string>(['Apple', 'Banana', 'Some more']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Hello there!'));
console.log(echo2<number>(27));
