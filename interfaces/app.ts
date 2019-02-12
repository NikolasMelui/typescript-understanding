namespace InterfacedPerson {
  interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(greetWord: string): void;
  }

  class Person implements NamedPerson {
    firstName: string;
    greet(greetWord: string): void {
      console.log(greetWord);
    }
    constructor(firstName: string) {
      this.firstName = firstName;
    }
  }

  const currentPerson = new Person('Nikolay');
  currentPerson.greet('Hello!!!');

  const greet = (person: NamedPerson): void =>
    console.log(`Hello, ${person.firstName}`);

  const changeName = (person: NamedPerson, newName: string): void => {
    person.firstName = newName;
  };

  const person: NamedPerson = {
    firstName: 'Nikolay',
    age: 27,
    hobbies: ['Cooking', 'Sports'],
    greet(greetWord: string): void {
      console.log(greetWord);
    }
  };

  greet(person);
  changeName(person, 'Nikolas');
  greet(person);
  person.greet('Hello');

  // Function Types Interface
  interface DoubleValueFunc {
    (number1: number, number2: number): number;
  }

  const myDoubleFunction: DoubleValueFunc = (
    value1: number,
    value2: number
  ): number => (value1 + value2) * 2;
  console.log(myDoubleFunction(10, 20));

  // Interface Inheritance
  interface AgedPerson extends NamedPerson {
    age: number;
  }
  const oldPerson: AgedPerson = {
    age: 27,
    firstName: 'Nikolay',
    greet(greetWord: string): void {
      console.log(greetWord);
    }
  };
  console.log(oldPerson);
}
