console.log("\n --- Example 1 : Object")
// Create an object car
const car = {
    // properties
    type: "Fiat",
    model: "500",
    color: "white",

    // methods
    carname : function() {
        return this.type + " " + this.model;
    }
}

// Call the property of object car
console.log(car.color) // white
console.log(car["type"]) // Fiat
console.log(car.carname()) // Fiat 500

console.log("\n --- Example 2 : Object Constructor")
// Create an object constructor
function Course(title, instructor, code, students, sessions) {
    this.t = title;
    this.i = instructor;
    this.c = code;
    this.s = sessions;
    this.number_students = students;
}
// Create an object using the constructor
const course1 = new Course("Computer Applications", "Prof. Wu", "TECH100", "M1", 20);
const course2 = new Course("JS programming", "Prof. Wu", "ET712", "C3", 18);

// Access to the Course value
console.log(course1.i) // Prof. Wu
console.log(course2.number_students) // 18

console.log("\n --- Example 3 : Methods of an object")
const Square = {
    // methods
    area(side) { return side * side; },
    perimeter(side) { return 4 * side; },
}

// Access to the methods of the object
let s = 9
let area1 = Square.area(s)
let perimeter1 = Square.perimeter(s)
console.log(`The square with side ${s} has an area of ${area1} and a perimeter of ${perimeter1}`) // The square with side 9 has an area of 81 and a perimeter of 36

console.log("\n --- Example 4 : Methods of an object using 'this' statement")
const hen = {
    // properties
    name: "Halen",
    eggcount: 0,

    // methods
    lay_an_egg() { this.eggcount ++; return "EGG";}
}

console.log("\n --- Lab Exercise 1 : JavaScript Object with AI Assistance")
const myCalculator = {
    // properties
    message : "Square Calculator",
    side : 2,

    // methods
    area_square() { return Math.pow(this.side, 2);},
    volume_cube() { return Math.pow(this.side, 3);}

}
console.log(`Message: ${myCalculator.message}`)
console.log(`Area of square ${myCalculator.area_square()}`)
console.log(`Volume of cube ${myCalculator.volume_cube()}`)

console.log("\n------ Lab Exercise 2: Exception Handling -----");
function readProperty(obj, prop) {
    // try attempts to access the requested property.
    try {
        return obj[prop];
    } 
    // catch handles an error if the property cannot be accessed.
    catch (error) {
        return "Error accessing property";
    }
}
// Example 1
const student = {
 name: "John",
 age: 20
};
console.log(readProperty(student, "name")); // John
// Example 2
console.log(readProperty(null, "name")); // Error accessing property
// null cannot have properties accessed from it, so JavaScript throws a TypeError. The catch block handles it.

/* Reflection:
1) ChatGPT help me to see it there are any problems in the code and it say that are no problems in Lab Exercise 2.
2) ChatGPT happen me understant that the code do and what it output. It also help me to understant why it happen.
*/