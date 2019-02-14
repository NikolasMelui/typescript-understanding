namespace Decorators {
  // Add the simple decorator
  const logged = (constructor: Function): void => console.log(constructor);

  // Use the decorator
  @logged
  class Person {
    constructor() {}
  }

  const logging = (value: boolean): any => (value ? logged : false);

  @logging(true)
  class Car {
    constructor() {}
  }
}
