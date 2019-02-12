namespace InterfacedPerson {
  interface NamedPerson {
    firstName: string;
    age: number;
  }

  const greet = (person: NamedPerson): void =>
    console.log(`Hello, ${person.firstName}`);

  const changeName = (person: NamedPerson, newName: string): void => {
    person.firstName = newName;
  };

  const person: NamedPerson = {
    firstName: 'Nikolay',
    age: 27
  };

  greet(person);
  changeName(person, 'Nikolas');
  greet(person);
}
