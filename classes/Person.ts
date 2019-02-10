export default class Person {
  public name: string;
  public surname: string;

  protected age: number = 27;

  private _species: string = 'Default';
  // Immutable field
  private readonly _isAlive: string = 'alive';

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

  get isAlive() {
    return this._isAlive;
  }

  // Bad code! Immutable field can not be changed!
  // set isAlive(value: string) {
  //   this._isAlive = value.length > 3 ? this._isAlive : 'Default';
  // }
}
