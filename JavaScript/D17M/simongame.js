let gameSequence = [];
let userSeq = [];
let allBtns = document.querySelectorAll(".btn");
let highestScore = 0;

let btns = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    levelUp();
  }
});

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 275);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 275);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;
  // choose random button
  let randomIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randomIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  buttonFlash(randbtn);
  gameSequence.push(randColor);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSequence[idx]) {
    if (userSeq.length == gameSequence.length) {
      // lets get a delay btw 2 levels
      setTimeout(levelUp, 1500);
    }
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    h3.innerHTML = `Game Over! Your score was <b>${level}</b> </br> Press any key to restart.`;
    highestScore = Math.max(highestScore, level);
    let score = document.querySelector(".score");
    score.innerText = `Highest Score: ${highestScore}`;
    reset();
  }
}

// size of gameseq == size of userseq == currlevel

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSequence = [];
  userSeq = [];
  level = 0;
}
