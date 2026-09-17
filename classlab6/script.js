let hourNow = 6;
let greating;

if(hourNow > 24){greating = 'Welcome To The Next Day'}
else if (hourNow > 18){greating = 'Good Evening!'}
else if (hourNow > 12){greating = 'Good Afternoon!'}
else if (hourNow > 0){greating = 'Good Morning!'}
else(greating = 'Welcome!')
document.write('<h2 class= "greet">' + greating + '</h2>')

console.log("Wilson-Lin")
console.log(greating)
console.log("Exmaple 1 : Coversion Between Data Types")
let num1 = prompt("Enter Number 1: ")
num1 = parseInt(num1)
let num2 = parseInt(prompt("Enter Number 2: "))
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("Exercise")
let firstname = prompt("Enter First Name: ")
let age = parseInt(prompt("Enter Your Age: "))
let favorite = prompt("Enter Your Favorite Programming Language: ")
let hobby = prompt("Enter your Favorite Hobby: ")
console.log(`My name is ${firstname}. I am ${age} years old, my favorite programing language is ${favorite}, and my favorite hobby is ${hobby}.`)