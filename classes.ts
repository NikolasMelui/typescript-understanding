class Person {
  public name: string;
  public surname: string;

  protected age: number = 27;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
  getAge() {
    return this.age;
  }
  setAge(age: number) {
    this.age = age;
  }
}
const person = new Person('Nikolay', 'Sladkiy');
person.setAge(27);
