/*
Name: Wilson Lin
Course: JavaScript Programming 
Homework 2: Arrays, Functions, and AI Assistance 
Date: 9/27/2026
*/

console.log("\n------ Class Example 1: Arrays -----");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);

console.log("\n------ Class Example 2: Loop Through Array -----");

let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("\n------ Class Example 3: Functions -----");

function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));

console.log("\n --- Student Score Analyser");

let scores = [];
for(let i = 0; i < 5; i++){
    let score = Number(prompt("Enter score for student " + (i + 1) + ":"));
    scores.push(score);
}
function calculateAverage(){
    let total = 0;

    for(let i = 0; i < scores.length; i ++){
        total += scores[i];
    }
    return total / scores.length;
    
}
let averageScore = calculateAverage();

console.log("Scores: ", scores.join(", "));
console.log("Average Score: ", averageScore);

if(averageScore >= 70){
    console.log("Class Passed");
}
else{
    console.log("Class Failed");
}

// AI assistance:
// ChatGPT helped me fix small errors like using "For" instead of "for"
// and adding Number in front of prompt.