// get the elements with class name "description"
// querySelector only slect the first elemts
let desc = document.querySelector('.description')

// querySelectorAll selects all the elements
let desc_all = document.querySelectorAll('.description')

// get the element by id
let t = document.querySelector('#title')

// get the element by tag name, 'li'

let list_item = document.querySelectorAll('li')

// Example 1
// select the element
let shape = document.querySelector('.shape')
let btnsquare = document.querySelector('.btnSquare')
let btnrectangle = document.querySelector('.btnRectangle')
let btncircle = document.querySelector('.btnCircle')

btncircle.addEventListener("click", function() {
    shape.textContent = "Circle".toUpperCase()
    shape.className = "circle"
})

btnsquare.addEventListener("click", function() {
    shape.textContent = "Square".toUpperCase()
    shape.className = "square"
})

btnrectangle.addEventListener("click", function() {
    shape.textContent = "Rectangle".toUpperCase()
    shape.className = "rectangle"
})