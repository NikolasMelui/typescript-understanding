class baseObject {
  width: number = 0;
  length: number = 0;
}
class Rectangle extends baseObject {
  calcSize = () => this.width * this.length;
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
