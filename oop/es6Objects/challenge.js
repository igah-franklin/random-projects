class CarSpeed {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUs() {
    return `${this.speed / 1.6}mi/h`;
  }

  set speedUs(setSpeed) {
    return (this.speed = setSpeed * 1.6);
  }
}

const ford = new CarSpeed("Ford", 120);
console.log(ford.speedUs);
console.log(ford);
