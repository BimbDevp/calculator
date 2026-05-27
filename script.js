// MEMORI INTERNAL
let numberOne = "";
let numberTwo = "";
let currentOperator = "";
let resetStatus = false;
let displayValue = "0";

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
function displayUpdate(){
    returnDisplay.textContent = displayValue;
    historyDisplay.textContent = `${numberOne} ${currentOperator} ${numberTwo}`;
}


// Event Listener
number.forEach(num => {
    num.addEventListener("click", () => {
        if (displayValue == "0" || resetStatus == true) {
            displayValue = num.textContent;
            resetStatus = false;
        } else {
            displayValue += num.textContent;
        }
        displayUpdate();
    })
})

operator.forEach(op => {
    op.addEventListener("click", () => {
    numberOne = displayValue;
    currentOperator = op.textContent;
    displayValue = "0";
    resetStatus = true;
    displayUpdate();
    })
    
})

equal.addEventListener("click", () => {
    if (numberOne != "" && currentOperator != "") {
        numberTwo = displayValue;
        if (currentOperator == "+") {
            displayValue = add(Number(numberOne), Number(numberTwo));
            
        }
        if (currentOperator == "-") {
            displayValue = subtract(Number(numberOne), Number(numberTwo));
        }
        if (currentOperator == "X") {
            displayValue = multiple(Number(numberOne), Number(numberTwo)) 
        }
        if (currentOperator == "/") {
            displayValue = division(Number(numberOne), Number(numberTwo));
        }
        resetStatus = true;
        displayUpdate();
    }   
})
