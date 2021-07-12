let winFromWhen;
let menu = 1;
const imgR = document.getElementById("imgR");
const imgP = document.getElementById("imgP");
const imgS = document.getElementById("imgS");
let scoreMe = document.getElementById("scoreman").textContent;
let scoreComp = document.getElementById("scorecomp").textContent;
let selected;
let can;
text = document.getElementById("text");
function RPS() {
  if (scoreMe !== winFromWhen && scoreComp !== winFromWhen) {
    if (menu === 0) {
      if (can) {
        const mainE = Math.floor(Math.random() * (4 - 1) + 1);
        if (selected === "Rock") {
          if (mainE === 1) {
            document.getElementById("imgR").style.visibility = "visible";
            text.style.color = "orange";
            text.textContent = `draw`;
            document.getElementById("Scissors").style.visibility = "visible";
            document.getElementById("Paper").style.visibility = "visible";
            document.getElementById("Rock").style.left = "40%";
          }
          if (mainE === 2) {
            document.getElementById("imgP").style.visibility = "visible";
            text.style.color = "red";
            text.textContent = `paper covers rock you lost`;
            Number(scoreComp++);
            scoreComp = document.getElementById("scorecomp").textContent =
              scoreComp;
            document.getElementById("Scissors").style.visibility = "visible";
            document.getElementById("Paper").style.visibility = "visible";
            document.getElementById("Rock").style.left = "40%";
          }
          if (mainE === 3) {
            document.getElementById("imgS").style.visibility = "visible";
            text.style.color = "green";
            text.textContent = `rock destroys Scissors you won`;
            Number(scoreMe++);
            scoreMe = document.getElementById("scoreman").textContent = scoreMe;
            document.getElementById("Scissors").style.visibility = "visible";
            document.getElementById("Paper").style.visibility = "visible";
            document.getElementById("Rock").style.left = "40%";
          }
        }
        if (selected === "Paper") {
          if (mainE === 1) {
            document.getElementById("imgR").style.visibility = "visible";
            text.style.color = "green";
            text.textContent = `paper covers rock you won`;
            Number(scoreMe++);
            scoreMe = document.getElementById("scoreman").textContent = scoreMe;
            document.getElementById("Scissors").style.visibility = "visible";
            document.getElementById("Rock").style.visibility = "visible";
            document.getElementById("Paper").style.left = "50%";
          }
          if (mainE === 2) {
            document.getElementById("imgP").style.visibility = "visible";
            text.style.color = "orange";
            text.textContent = `draw`;
            document.getElementById("Scissors").style.visibility = "visible";
            document.getElementById("Rock").style.visibility = "visible";
            document.getElementById("Paper").style.left = "50%";
          }
          if (mainE === 3) {
            document.getElementById("imgS").style.visibility = "visible";
            text.style.color = "red";
            text.textContent = `Scissors cuts paper you lost `;
            Number(scoreComp++);
            scoreComp = document.getElementById("scorecomp").textContent =
              scoreComp;
            document.getElementById("Scissors").style.visibility = "visible";
            document.getElementById("Rock").style.visibility = "visible";
            document.getElementById("Paper").style.left = "50%";
          }
        }
        if (selected === "Scissors") {
          if (mainE === 1) {
            document.getElementById("imgR").style.visibility = "visible";
            text.style.color = "red";
            text.textContent = `rock destroys Scissors you lost`;
            Number(scoreComp++);
            scoreComp = document.getElementById("scorecomp").textContent =
              scoreComp;
            document.getElementById("Paper").style.visibility = "visible";
            document.getElementById("Rock").style.visibility = "visible";
            document.getElementById("Scissors").style.left = "60%";
          }
          if (mainE === 2) {
            document.getElementById("imgP").style.visibility = "visible";
            text.style.color = "green";
            text.textContent = `Scissors cuts paper you won`;
            Number(scoreMe++);
            scoreMe = document.getElementById("scoreman").textContent = scoreMe;
            document.getElementById("Paper").style.visibility = "visible";
            document.getElementById("Rock").style.visibility = "visible";
            document.getElementById("Scissors").style.left = "60%";
          }
          if (mainE === 3) {
            document.getElementById("imgS").style.visibility = "visible";
            text.style.color = "orange";
            text.textContent = `draw`;
            document.getElementById("Paper").style.visibility = "visible";
            document.getElementById("Rock").style.visibility = "visible";
            document.getElementById("Scissors").style.left = "60%";
          }
        }
        if (scoreMe === winFromWhen) {
          document.getElementById("Paper").style.visibility = "hidden";
          document.getElementById("Rock").style.visibility = "hidden";
          document.getElementById("Scissors").style.visibility = "hidden";
          document.getElementById("btn").style.visibility = "hidden";
          document.getElementById("scoreman").style.visibility = "hidden";
          document.getElementById("scorecomp").style.visibility = "hidden";
          document.getElementById("me").style.visibility = "hidden";
          document.getElementById("comp").style.visibility = "hidden";
          document.getElementById("scoreP").style.visibility = "hidden";
          document.body.style.backgroundColor = "lightgreen";
          document.getElementById(selected).style.left = "50%";
          document.getElementById(selected).style.visibility = "visible";
        }
        if (scoreComp === winFromWhen) {
          document.getElementById("Paper").style.visibility = "hidden";
          document.getElementById("Rock").style.visibility = "hidden";
          document.getElementById("Scissors").style.visibility = "hidden";
          document.getElementById("btn").style.visibility = "hidden";
          document.getElementById("scoreman").style.visibility = "hidden";
          document.getElementById("scorecomp").style.visibility = "hidden";
          document.getElementById(selected).style.left = "50%";
          document.getElementById(selected).style.visibility = "visible";
          document.getElementById("me").style.visibility = "hidden";
          document.getElementById("comp").style.visibility = "hidden";
          document.getElementById("scoreP").style.visibility = "hidden";
          document.body.style.backgroundColor = "lightcoral";
        }
      }
    }
  }
}

function R() {
  if (winFromWhen !== scoreMe && winFromWhen !== scoreComp) {
    if (menu === 0) {
      can = 1;
      document.getElementById("imgS").style.visibility = "hidden";
      document.getElementById("imgP").style.visibility = "hidden";
      document.getElementById("imgR").style.visibility = "hidden";
      selected = "Rock";
      document.getElementById("Scissors").style.visibility = "hidden";
      document.getElementById("Paper").style.visibility = "hidden";
      document.getElementById("Rock").style.left = "50%";
    }
  }
}
function P() {
  if (winFromWhen !== scoreMe && winFromWhen !== scoreComp) {
    if (menu === 0) {
      can = 1;
      document.getElementById("imgS").style.visibility = "hidden";
      document.getElementById("imgP").style.visibility = "hidden";
      document.getElementById("imgR").style.visibility = "hidden";
      selected = "Paper";
      document.getElementById("Scissors").style.visibility = "hidden";
      document.getElementById("Rock").style.visibility = "hidden";
      document.getElementById("Paper").style.left = "50%";
    }
  }
}
function S() {
  if (winFromWhen !== scoreMe && winFromWhen !== scoreComp) {
    if (menu === 0) {
      can = 1;
      document.getElementById("imgS").style.visibility = "hidden";
      document.getElementById("imgP").style.visibility = "hidden";
      document.getElementById("imgR").style.visibility = "hidden";
      selected = "Scissors";
      document.getElementById("Rock").style.visibility = "hidden";
      document.getElementById("Paper").style.visibility = "hidden";
      document.getElementById("Scissors").style.left = "50%";
    }
  }
}

function rst() {
  menu = 1;
  selected = "";
  scoreComp = 0;
  scoreMe = 0;
  scoreMe = document.getElementById("scoreman").textContent = scoreMe;
  scoreComp = document.getElementById("scorecomp").textContent = scoreComp;
  document.getElementById("imgS").style.visibility = "hidden";
  document.getElementById("imgP").style.visibility = "hidden";
  document.getElementById("imgR").style.visibility = "hidden";
  document.getElementById("btn").style.visibility = "visible";
  document.getElementById("scoreman").style.visibility = "visible";
  document.getElementById("scorecomp").style.visibility = "visible";
  document.getElementById("me").style.visibility = "visible";
  document.getElementById("comp").style.visibility = "visible";
  document.getElementById("scoreP").style.visibility = "visible";
  document.getElementById("Paper").style.visibility = "visible";
  document.getElementById("Scissors").style.visibility = "visible";
  document.getElementById("Rock").style.visibility = "visible";
  document.getElementById("Paper").style.left = "50%";
  document.getElementById("Scissors").style.left = "60%";
  document.getElementById("Rock").style.left = "40%";

  text.style.color = "black";
  document.getElementById("t1").style.visibility = "visible";
  document.getElementById("t3").style.visibility = "visible";
  document.getElementById("t5").style.visibility = "visible";
  document.body.style.background = "white";
  text.textContent = "please choose ✌ or✋ or✊ then click ready";
}

function t1() {
  menu = 0;
  winFromWhen = 1;
  document.getElementById("t1").style.visibility = "hidden";
  document.getElementById("t3").style.visibility = "hidden";
  document.getElementById("t5").style.visibility = "hidden";
}
function t3() {
  menu = 0;
  winFromWhen = 3;
  document.getElementById("t1").style.visibility = "hidden";
  document.getElementById("t3").style.visibility = "hidden";
  document.getElementById("t5").style.visibility = "hidden";
}
function t5() {
  menu = 0;
  winFromWhen = Number(prompt("how much wins would you like?"));
  document.getElementById("t1").style.visibility = "hidden";
  document.getElementById("t3").style.visibility = "hidden";
  document.getElementById("t5").style.visibility = "hidden";
}
