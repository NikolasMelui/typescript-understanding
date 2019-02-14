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

  // More usefull decorator
  // const printable = (constructor: Function): void =>
  // (constructor.prototype.print = () => console.log(constructor.prototype));
  function printable(constructor: Function): void {
    constructor.prototype.print = function(): void {
      console.log(this);
    };
  }

  @printable
  class Plant {
    name = 'Green Plant';
  }
  const plant = new Plant();
  (<any>plant).print();
}
