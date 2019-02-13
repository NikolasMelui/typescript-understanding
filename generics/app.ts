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
