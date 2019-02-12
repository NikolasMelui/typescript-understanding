namespace MyMath {
  const PI = 3.14;

  export const calculateCircumference = (diameter: number): number =>
    diameter * PI;
  export const calculateRectangle = (witdh: number, length: number): number =>
    witdh * length;
}

console.log(MyMath.calculateCircumference(5));
console.log(MyMath.calculateRectangle(5, 10));
