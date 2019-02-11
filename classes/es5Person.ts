class Person {
  private _firstName: string = '';

  public enumerable: boolean = true;
  public configurable: boolean = true;

  get firstName() {
    return this._firstName;
  }

  set firstName(firstname: string) {
    if (firstname.length > 3) {
      this._firstName = firstname;
    } else {
      this._firstName = '';
    }
  }
}

const person = new Person();
person.firstName = 'Ni';
console.log(person.firstName);
person.firstName = 'Nikolay';
console.log(person.firstName);
