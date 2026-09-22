console.log("Wilson Lin")
console.log("\nExample 1: Array")
let mixedarray = ['cars', 10, true, 'apples', -3.5]
console.log(`The 4th value is ${mixedarray[3]}`)
console.log(`Original array = ${mixedarray}`)
console.log("\nExample 2: array method")
// Remove the first value (left-most) in array mixedarray
mixedarray.shift()
console.log(`Array after shift method = ${mixedarray}`)

// Add values to the left-most in array mixedarray
mixedarray.unshift("NY, 280")
console.log(`Array after unshift method = ${mixedarray}`)

// Add valuse to the right-most in array mixedarray
mixedarray.push(-360, 'QCC')
console.log(`Array after push method = ${mixedarray}`)

// METHOD THAT RETURNS VALUE
// Find the index number of 'cherries'
indexcherries = mixedarray.indexOf("cherries")
console.log(`what is the index for cherries ${indexcherries}`)
// It returns -1 if the value doesn't exist

indexqcc = mixedarray.indexOf("QCC")
console.log(`What is the index for QCC? ${indexqcc}`)

console.log("\n --- Example 3: if statement")
// Check for the one condition
// It will run code wrap in between the curly braces if the statement is true 
// Otherwise, if the statement is false, it will skip the code wrap in between the curly braces
let goodmood = true
let gotsleep = true

/*
if(goodmood == true && goodmood == true){
    console.log(`Today is a good day!`)
}
*/

if(goodmood && gotsleep){
    console.log(`Today is a good day!`)
}
console.log(`Good Bye!`)
// Has two branches
let n1 = 4
let n2 = 4

if(n1===n2){
    console.log(`The numbers are equal`)
}
else{
    console.log(`The numbers are not equal`)
}

console.log("\n --- Example 5: if-else statement with is NaN function")
let userinput = prompt("Enter a number: ")
let checkinput = isNaN(parseInt(userinput))

if(checkinput){
    console.log(`${userinput} is a string`)
}
else{
    console.log(`${userinput} is a number`)
}

console.log("\n --- Example 6: multiway conditional statement")
// Check if the number is zero, negative or positive
let inputnumber = parseInt(userinput)
if(inputnumber === 0){
    console.log(`The number is zero`)
}
else if (inputnumber > 0){
    console.log(`The number is positive`)
}
else if(inputnumber < 0){
    console.log(`The number is negative`)
}
else{
    console.log(`The input is not a number`)
}

console.log("\n --- Example 7: AND operator")
// AND operator && returns a true if all statements are true
// Check if a username is 6+ characters and has no space
let username = prompt("Enter a username: ")
if(username,length >=6 && username.indexOf(" ") === -1){
    console.log(`Valid username`)
}
else{
    console.log(`Invalid username`)
}

console.log("\n --- Example 8: OR operator")
// OR operator || returns a true if one of the statement is true
// rate a book if is excellent, good, average, invalid
let rate = parseInt(prompt("How do you like the book?\n3 for excellent, 2 for good, 1 for average"))
if(rate === 3 || rate === 2){
    console.log(`Thank you for choosing The Book`)
}
else if(rate === 1 || rate === 0){
    console.log(`We are sorry that you find The Book boring!`)
}
else{
    console.log("INVALID RATE!")
}