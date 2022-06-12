"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.calcAge = function () {
  //     console.log(`Age: ${2022 - this.birthYear}`);
  //   };
};

const paul = new Person("Paul", 1993);
console.log(typeof paul);
const pat = new Person("pat", 1990);
const josh = new Person("josh", 1970);
console.log(paul, pat);
// console.log(paul instanceof Person);

//console.log(Person.prototype);
Person.prototype.calculateAge = function () {
  const age = 2022 - this.birthYear;
  return age;
};

//console.log(paul.calculateAge(), pat.calculateAge());
