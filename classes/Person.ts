export default class Person {
  public name: string;
  public surname: string;

  protected age: number = 27;

  private _species: string = 'Default';

  static type: string = 'human';

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get species() {
    return this._species;
  }

  set species(value: string) {
    this._species = value.length > 3 ? this._species : 'Default';
  }
}
