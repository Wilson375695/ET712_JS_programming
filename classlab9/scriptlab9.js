console.log("Wilson Lin")
console.log("\n --- Example 1: Intro to Function")
// definr a function that prints from 3 to 1
function printcount(){
    for(let num = 3; num >= 1; num -= 1){
        console.log(num)
    }
}

console.log("\n --- Example 2: Function With Parameters")
// function that prints a name. The name is passed to the function
function greeting(name){
    console.log(`Good Afternoon ${name.toUpperCase()}`)
}

console.log("\n --- Example 3: Function With Parameters")
// function that prints a message that starts with number 1 all the way up to te stopnumber
// The stopnumber and the message are passed to the function
function greetcount(msg, stopnumber){
    for(let n = 1; n <= stopnumber; n += 1){
        console.log(`${msg} ${n}`)
    }
}

console.log("\n --- Example 4: Function With Parameters")
// function that prints 'snake's eus' if two numbers are 1
function snake(n1, n2){
    if(n1 === 1 && n2 === 1){
        console.log("Snake's Eyes")
    }
    else{
        console.log("Not Snake's Eyes")
    }
}

console.log("\n --- Example 5: Function That Returns Value")
// function that calculates the are of a square and returns the calculated area
function areasquare(side){
    console.log("Calculate area of square with side", side)
    return side*side
    console.log("The area is ", side*side)
}

console.log("\n --- Example 6: Function That Returns A Boolean Value")
// function that returns 'true' if the temperature is greater that 75
// otherwise, it reurns 'false'
// the temperature is passed to the function
function checktemperature(t){
    if(t > 75){
        return true
    }
    else{
        return false
    }
}

console.log("\n --- Example 7: JS Built-in Math Function")
const PI = Math.PI
console.log(PI)
console.log(`Round PI = ${Math.round(PI)}`)
console.log(`Ceil PI = ${Math.ceil(PI)}`)
console.log(`Floor PI = ${Math.floor(PI)}`)
console.log(`Power 2^5 = ${Math.pow(2,5)}`)
console.log(`Square root of 81 = ${Math.sqrt(81)}`)
console.log(`Random numbers = ${Math.random()}`)
console.log(`Return a random number between 1 and 9: ${Math.round(Math.random()*9)}`)

console.log("\n --- Example 8: JS Built-in Math Function")
// function that will randomly piuck a color from an array
let colors = ['yellow', 'red', 'pink', 'blue', 'green', 'orange']

function pickindex(lastindex){
    let random_index = Math.floor(Math.random() * lastindex)
    return random_index
}
let index = pickindex(colors.length)
console.log(`Testing index = ${index}`)
let pickcolor = colors[index]
console.log(`Randomly Picked Color = ${pickcolor}`)