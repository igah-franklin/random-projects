"use strict";

const restaurant = {
  name: "Rock View",
  place: "Abuja",
  categories: ["milk", "Abacha", "fried rice", "vegetable soup"],
  startMenu: ["boiled yam and egg", "crispy yam", "curry chicken"],
  mainMenu: ["grilled chicken", "Abacha", "broiled tomatoes", "fried eggs"],
};

const { name, place, categories, startMenu, mainMenu } = restaurant;

console.log(name, "\n", place);

const [x, y, z] = restaurant.categories;
console.log(x, y, z);
