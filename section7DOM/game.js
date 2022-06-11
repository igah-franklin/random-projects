"use strict";

let setSecretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = (document.querySelector(".secret_number").textContent =
  setSecretNumber);
let score = 20;
let highscore = 0;
//console.log(secretNumber);

//play game
const check = document.querySelector("#check");
check.addEventListener("click", function () {
  const entry = Number(document.querySelector("#entry").value);

  let message = document.querySelector(".message");
  if (!entry) {
    message.innerHTML = "enter a valid a number";
  } else if (entry === secretNumber) {
    message.innerHTML = "correct number";
    document.querySelector(".score").textContent = entry;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high_score").textContent = highscore;
    }
  } else if (entry !== secretNumber) {
    if (score > 1) {
      message.innerHTML =
        entry > secretNumber
          ? "the number is too high"
          : "the number is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.innerHTML = "you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  //   else if (entry > secretNumber) {
  //     if (score > 1) {
  //       message.innerHTML = "the number is too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       message.innerHTML = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (entry < secretNumber) {
  //     if (score > 1) {
  //       message.innerHTML = "the number is too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       message.innerHTML = "you lost the game";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

//reset game
document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector("#entry").value = "";
  document.querySelector(".score").textContent = "";
  document.querySelector(".secret_number").textContent = "?";
});
