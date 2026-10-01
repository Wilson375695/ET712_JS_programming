console.log("\n --- Example 1: Local And Global Variable")
// Global variable
let msg = 'This is a out side message'

function displaymsg(){
    // Local variable
    let msg = 'Hello World'
}
// Calling function
displaymsg()

console.log(msg)

console.log("\n --- Example 2: Constant Variable")
// Constant variable are variable whose cannot be changed later
const Gravity = 9.8
console.log(Gravity)
// Gravity = 9.9 --> The console will show an error

console.log("\n --- Example 3: Function In A Variable")
const sum = function(num1, num2){
    return num1 + num2
}

// Calling function
let s = sum(2, 7)
console.log(s)

console.log("\n --- Example 4: Arrow Function")
let greet = (n) => {
    console.log(`Welcome to function ${n}`)
}
// Calling function
greet("Peter Pan")

console.log("\n --- Example 5: Function Calling Function")
// Function that randomly generates a number between 1 and 6
function rollDice(){
    return Math.floor((Math.random() * 6) + 1)
}

function calltwice(){
    let dice1 = rollDice()
    let dice2 = rollDice()
    console.log(`${dice1} ${dice2}`)
}

// Calling function
calltwice()
calltwice()
calltwice()

console.log("\n --- Example 6: Function Returns Function")
// Function that checks if a num is greater than thhe min number and greater than the max number
function makebetweenfunctions(min, max){
    return function(num){
        return num >= min && num <= max
    }
}

let child = makebetweenfunctions(3, 7)

console.log(child(10))

console.log("\n --- Example 7: Function With Default Values")
// Function to roll a dice n times, n is passed to the function, if n is not passed, then n = 1
function rollingdice(n){
    for(let i = 0; i < n; i++){
        console.log(rollDice())
    }
}

console.log("\n --- Example 8: Spread Syntax")
// Spread syntax ... is used to iterate elements form that list
nums = [3, 9, -6, 10, 1, 0]
let maxnum = Math.max(...nums)
console.log(maxnum)