// MEMORI INTERNAL
let numberOne = "";
let numberTwo = "";
let currentOperator = "";
let resetStatus = false;

// DOM Selectors
const returnDisplay = document.querySelector(".big-number");
const historyDisplay = document.querySelector(".small-number");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

// Math Logic Engine
const add = (numberOne, numberTwo) => numberOne + numberTwo;
const subtract = (numberOne, numberTwo) => numberOne - numberTwo;
const multiple = (numberOne, numberTwo) => numberOne * numberTwo;
const division = (numberOne, numberTwo) => numberOne / numberTwo;
const percent = (number) => number / 100;
// UI Update Function

// Event Listener
number.forEach(num => {
    num.addEventListener("click", () => {
        if (returnDisplay.textContent == "0" || resetStatus == true) {
            returnDisplay.textContent = num.textContent;
            resetStatus = false;
        } else {
            returnDisplay.textContent += num.textContent;
        }
    })
})
