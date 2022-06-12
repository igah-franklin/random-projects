"use strict";

class Student {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  getAge() {
    const result = `${this.firstName} is ${2022 - this.birthYear} years old`;
    console.log(result);
  }
}

const student = new Student("John", 1995);
student.getAge();
