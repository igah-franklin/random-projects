"use strict";

const accounts = {
  owner: "igah",
  deposits: [90, 50, 680, 300, 500, 7000],

  info: function () {
    return `owner:${this.owner} \ndeposits:${this.deposits}`;
  },
  get data() {
    return `owner:${this.owner} \n deposits:${this.deposits.slice(-1)}`;
  },

  set setData(value) {
    return this.deposits.push(value);
  },
};

//console.log(accounts.info());
console.log("getData:\n", accounts.data);
accounts.setData = 40000;
console.log(accounts.deposits);
