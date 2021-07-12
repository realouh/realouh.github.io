"use strict";
const redArrow = document.getElementById("red-arrow");
redArrow.style.visibility = "hidden";
let hight;
let weight;
let bmi;
let bmiV;
let Formula = "standard";
let BMIRange;

function calcBMI() {
  hight = document.getElementById("hight");
  weight = document.getElementById("weight");
  bmi = document.getElementById("BMI");
  if (Formula === "standard") {
    bmi.value = (Number(weight.value) / Number(hight.value) ** 2).toFixed(1);
    bmiV = Number(bmi.value);
  } else {
    bmi.value = (
      (703 * Number(weight.value)) /
      (Number(hight.value) * 12) ** 2
    ).toFixed(1);
    bmiV = Number(bmi.value);
  }
  if (bmiV < 18.5) {
    redArrow.style.visibility = "visible";
    BMIRange = "under weight";
    redArrow.style.left = "38.5%";
  } else if (bmiV >= 18.5 && bmiV <= 24.9) {
    redArrow.style.visibility = "visible";
    redArrow.style.left = "43.5%";
    BMIRange = "Normal";
  } else if (bmiV >= 25.0 && bmiV <= 29.9) {
    redArrow.style.visibility = "visible";
    redArrow.style.left = "48.5%";
    BMIRange = "Over Weight";
  } else if (bmiV > 30 && bmiV <= 35) {
    redArrow.style.visibility = "visible";
    redArrow.style.left = "53.8%";
    BMIRange = "obese Class one";
  } else if (bmiV > 35 && bmiV <= 40) {
    redArrow.style.visibility = "visible";
    redArrow.style.left = "59%";
    BMIRange = "obese Class two";
  } else if (bmiV > 40) {
    redArrow.style.visibility = "visible";
    redArrow.style.left = "59%";
    BMIRange = "obese Class three";
  } else {
    BMIRange = "error something wrong happend";
  }
  bmiToUser();
}
function FormulaChanger() {
  Formula = Formula === "standard" ? "american" : "standard";
  console.log(Formula);
  if (Formula === "standard") {
    document.getElementById("hight").placeholder = "height in (m)";
    document.getElementById("weight").placeholder = "height in (kg)";
  } else if (Formula === "american") {
    document.getElementById("hight").placeholder = "height in (feet)";
    document.getElementById("weight").placeholder = "height in (lb)";
  }
}

function bmiToUser() {
  document.getElementById(
    "bmi-txt"
  ).textContent = `BMI: ${bmiV}                                     / Range :${BMIRange}`;
}
