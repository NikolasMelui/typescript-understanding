namespace Decorators {
  function logged(constructor: Function) {
    console.log(constructor);
  }

  @logged
  class Person {
    constructor() {}
  }
}
