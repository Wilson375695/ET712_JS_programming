console.log("\n --- Example 1: for loops")
// for loop to print from 0 to 4 inclusive, 0 1 2 3 4 
for(let n = 0; n <= 4; n++){
    console.log(`The current counter is ${n}`)
}

console.log("\n --- Example 2: for loops")
// for loop to print even numbers between initial value up to 100, exclusive
// the initial value is collected from the dialog box using prompt()
let initial = parseInt(prompt("Enter a number less than 90: "))
for(initial; initial < 100; initial++){
    if(initial % 2 === 0){
    console.log(`${initial}`)
    }
}

console.log("\n --- Example 3: for loops for  decreasing counter")
// for loop to print form 9 to 1, inclusive, 9 6 3
for(let m = 9; m >= 1; m-=3){
    console.log(`${m}`)
}

console.log("\n --- Example 4: for loops in an array")
let cars = ['Mazda', 'Tesla', 'Dodge','BMW', 'Porshe']
for(let eachcar of cars){
    // check and print car's name qith 5 charaters
    if(eachcar.length === 5){
        console.log(`${eachcar}`)
    }
}

console.log("\n --- Example 5: while loop as a counter")
// while to print for 0 to 4
// initial value
let i = 0
while(i <= 4){
    console.log(i)
    i++ // update of i = increase i by 1

}

console.log("\n --- Example 6: while to guess a number")
// the value of a constant varibale CAN"T BE CHANGED
const SECRET = 8
// collecft user number
let usernumber = parseInt(prompt("Enter a number between 0 to 10"))
// use a while to recollect usernumber of the collected number is not equal to SECRET
while(SECRET !== usernumber){
    usernumber = parseInt(prompt("Wrong guess! Enter another number: "))
}
console.log(`Great! The secret numbe is ${SECRET}`)

console.log("\n --- Example 7: while to validate a number")
// validate if the input number is between 1 and 9
while(true){
    let number = parseInt(prompt("Enter a number 1-9: "))
    if(number >= 1 && number <= 9){
        break
    }
}

console.log("\n --- Example 8: for loop with continue statement")
// skip numbers that are multipled of 3 between 0 and 10
for(let n = 0; n <= 10; n++){
    if(n % 3 === 0){
        continue
    }
    console.log(n)
}