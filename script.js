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
const decimal = document.querySelector(".decimal");
const negative = document.querySelector(".negative");
const percentBtn = document.querySelector(".percent");

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
    if (num.textContent != "."){
        num.addEventListener("click", () => {
            
            if (displayValue === "Error") {
                displayValue = num.textContent;
                resetStatus = false;
                displayUpdate();
                return;
            }
            if (displayValue == "0" || resetStatus == true ) {
                displayValue = num.textContent;
                resetStatus = false;
            } else {
                if (displayValue.replace(".", "").replace("-", "").length < 9) {
                    displayValue += num.textContent;
                }
            }
            displayUpdate();
        })
    }
})

operator.forEach(op => {
    if (op.textContent != "%" && op.textContent != "+/-") {
        op.addEventListener("click", () => {
            if (displayValue === "Error") return;
            numberOne = displayValue;
            currentOperator = op.textContent;
            displayValue = "0";
            resetStatus = true;
            displayUpdate();
            
            })
        }
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
            if (Number(numberTwo) === 0) {
                displayValue = "Error";
            }else {
                displayValue = division(Number(numberOne), Number(numberTwo));
        }}
        if (displayValue != "Error") {
            let fixed = Number(displayValue)
            displayValue = String(parseFloat(fixed.toFixed(4)));
            }
        resetStatus = true;
        displayUpdate();
    }   
})

decimal.addEventListener("click", () => {
    if (displayValue === "Error") return;
    if (resetStatus == true) {
        displayValue = "0.";
        resetStatus = false;
    } else if (!displayValue.includes(".")) {
        displayValue += ".";
         
    }
    displayUpdate()
})

negative.addEventListener("click", () => {
    if (displayValue === "Error") return;
    let dot = Number(displayValue) * -1;
    let result = String(parseFloat(dot.toFixed(4)));
    displayValue = result === "-0" ? "0" : result;
    displayUpdate();
})

percentBtn.addEventListener("click", () => {
    if (displayValue === "Error") return;
    let prcn = percent(Number(displayValue));
    displayValue = String(parseFloat(prcn.toFixed(4)));
    displayUpdate();
})

clear.addEventListener("click", () => {
    displayValue = "0";
    numberOne = "";
    numberTwo = "";
    currentOperator = "";
    resetStatus = false;
    displayUpdate();
})
