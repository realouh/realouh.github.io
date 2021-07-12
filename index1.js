let result = document.getElementById("result");
let resultV = (result.value = "");
let operation;
let resultN;
function Nu0() {
  result.value = resultV + "0";
  resultV = result.value;
}
function Nu1() {
  result.value = resultV + "1";
  resultV = result.value;
}
function Nu2() {
  result.value = resultV + "2";
  resultV = result.value;
}
function Nu3() {
  result.value = resultV + "3";
  resultV = result.value;
}
function Nu4() {
  result.value = resultV + "4";
  resultV = result.value;
}
function Nu5() {
  result.value = resultV + "5";
  resultV = result.value;
}
function Nu6() {
  result.value = resultV + "6";
  resultV = result.value;
}
function Nu7() {
  result.value = resultV + "7";
  resultV = result.value;
}
function Nu8() {
  result.value = resultV + "8";
  resultV = result.value;
}
function Nu9() {
  result.value = resultV + "9";
  resultV = result.value;
}
function NuP() {
  resultN = Number(resultV);
  if (resultN != "" && resultN != NaN) {
    operation = "+";
    result.value = "";
    resultV = result.value;
  }
  document.getElementById("PE").style.color = "black";
  document.getElementById("ME").style.color = "white";
  document.getElementById("MU").style.color = "white";
  document.getElementById("BY").style.color = "white";
}
function NuM() {
  resultN = Number(resultV);
  if (resultN != "" && resultN != NaN) {
    operation = "-";
    result.value = "";
    resultV = result.value;
  }
  document.getElementById("ME").style.color = "black";
  document.getElementById("PE").style.color = "white";
  document.getElementById("MU").style.color = "white";
  document.getElementById("BY").style.color = "white";
}
function NuM1() {
  resultN = Number(resultV);
  if (resultN != "" && resultN != NaN) {
    operation = "*";
    result.value = "";
    resultV = result.value;
  }
  document.getElementById("MU").style.color = "black";
  document.getElementById("PE").style.color = "white";
  document.getElementById("ME").style.color = "white";
  document.getElementById("BY").style.color = "white";
}
function NuB() {
  resultN = Number(resultV);
  if (resultN != "" && resultN != NaN) {
    operation = "/";
    result.value = "";
    resultV = result.value;
  }
  document.getElementById("BY").style.color = "black";
  document.getElementById("PE").style.color = "white";
  document.getElementById("ME").style.color = "white";
  document.getElementById("MU").style.color = "white";
}
function NuE() {
  if (operation === "+") {
    result.value = Number(resultV) + resultN;
  }
  if (operation === "-") {
    result.value = resultN - Number(resultV);
  }
  if (operation === "*") {
    result.value = Number(resultV) * resultN;
  }
  if (operation === "/") {
    result.value = resultN / Number(resultV);
  }

  resultV = result.value;
  document.getElementById("BY").style.color = "white";
  document.getElementById("PE").style.color = "white";
  document.getElementById("ME").style.color = "white";
  document.getElementById("MU").style.color = "white";
}
function AC() {
  resultN = "";
  resultV = "";
  result.value = "";
  document.getElementById("BY").style.color = "white";
  document.getElementById("PE").style.color = "white";
  document.getElementById("ME").style.color = "white";
  document.getElementById("MU").style.color = "white";
}
function ad() {
  if (resultV.includes(".") === false) {
    result.value = resultV + ".";
    resultV = result.value;
  }
}
function re() {
  result.value = resultV.slice(0, resultV.length - 1);
  resultV = result.value;
}
function sago() {
  if (resultV.includes("-") === true) {
    result.value = resultV.replace("-", "");
  }
  if (resultV.includes("-") === false) {
    result.value = "-" + resultV;
  }
  resultV = result.value;
}
function per() {
  result.value = 0.01 * resultV;
  resultV = result.value;
}
