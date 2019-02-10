import Person from './Person';

// Inheritance
class Nikolay extends Person {
  constructor(surname: string) {
    super('Nikolay', surname);
  }
}

const nikolay = new Nikolay('Sladkiy');
console.log(nikolay);

console.log(nikolay.species);
