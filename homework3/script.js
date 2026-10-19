
/*
Name: Wilson Lin
Course: JavaScript Programming
Lab Experiment: Simple Calculator and AI Assistance
Date: October 18, 2026
*/

console.log("------ Lab Exercise 6: Simple Calculator ------");

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");

function calculate(operation) {
    if (num1.value.trim() === "" || num2.value.trim() === "") {
        result.textContent = "Error: Please enter both numbers.";
        return;
    }
    const number1 = Number(num1.value);
    const number2 = Number(num2.value);
    let answer;
    switch (operation) {
        case "add":
            answer = number1 + number2;
            break;
        case "subtract":
            answer = number1 - number2;
            break;
        case "multiply":
            answer = number1 * number2;
            break;
        case "divide":
            if (number2 === 0) {
                result.textContent = "Error: Cannot divide by zero.";
                return;
            }
            answer = number1 / number2;
            break;
        default:
            result.textContent = "Error: Invalid operation.";
            return;
    }
    result.textContent = "Result: " + answer;
}

addBtn.addEventListener("click", function () {
    calculate("add");
});

subtractBtn.addEventListener("click", function () {
    calculate("subtract");
});

multiplyBtn.addEventListener("click", function () {
    calculate("multiply");
});

divideBtn.addEventListener("click", function () {
    calculate("divide");
});

const buttons = document.querySelectorAll("#buttons button");

buttons.forEach(function (button) {
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "orange";
    });
});

buttons.forEach(function (button) {
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "steelblue";
    });
});

/*
AI Assistance Reflection:

AI helped me understand how JavaScript event listeners work.
I learned how to use querySelector() to select HTML elements,
value to retrieve input values, and Number() to convert them
into numbers. I used a single calculate() function with a
switch statement to perform all four arithmetic operations.
I also used mouseover and mouseout events to change and restore
button colors. Finally, I added checks for empty inputs and
division by zero to display appropriate error messages.
*/