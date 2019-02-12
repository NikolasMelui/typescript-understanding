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
}
