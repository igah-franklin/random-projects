"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

console.log("increase in speed:", car1.accelerate(), "km/hr");
console.log("increase in speed:", car1.accelerate(), "km/hr");
console.log("new speed:", car2.accelerate(), "km/hr");

console.log("brake car1", car1.brake(), "km/hr");
console.log("brake car2", car2.brake(), "km/hr");
