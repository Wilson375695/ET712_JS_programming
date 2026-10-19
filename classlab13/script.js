// select element to add an event
let btnpress = document.querySelector(".btnpress");
// add a click event to the button
// when user click on the button, it will open a dialog box
btnpress.onclick = function(){
    alert('ET712')
}

// collect the circle element
let circle = document.querySelector(".circle")
let counter = document.querySelector(".counter")
let btnreset = document.querySelector(".btnreset")
let setcounter = 0
circle.onmouseover = function(){
    setcounter +=1
    counter.textContent = setcounter
}
btnreset.onclick = function(){
    setcounter = 0
    counter.textContent = 0
}

function changecolor(){
    let red = Math.floor(Math.random*255)
    let green = Math.floor(Math.random*255)
    let blue = Math.floor(Math.random*255)
    return `rgb(${red}, ${green}, ${blue})`
}

// EVENT LISTENER
// collect the element
let btnchangecolor = document.querySelector(".btnchangecolor")
btnchangecolor.addEventListener("click", function(event){
    event.computedStyleMap.backgroundColor = changecolor()
    if(event.textContent === "CHANGE COLOR"){
        event.textContent === "CLICK AGAIN"
    }
    else{
        event.textContent === "ERROR"
    }
})