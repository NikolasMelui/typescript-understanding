// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk = () => console.log('Toooooooooot!');

  accelerate = (speed: number) =>
    (this.acceleration = this.acceleration + speed);
}

var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
