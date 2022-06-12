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

  set fullName(newName) {
    //console.log(newName);
    if (newName.includes(" ")) this._firstName = newName;
    else alert(`${newName} is not a full name`);
  }
  //   get fullName() {
  //     return this.fullName;
  //   }
}

const student = new Student("John", 1995);
console.log(student);
student.getAge();

// student.fullName = "mrk twin";
