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

const curPerson = new Person();
curPerson.firstName = 'Ni';
console.log(curPerson.firstName);
curPerson.firstName = 'Nikolay';
console.log(curPerson.firstName);
