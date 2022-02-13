//to do -- colours don't work in chrome
//have pastel option

const container = document.getElementById("container");

let gridSize = 16;

function makeGrid() {
    container.style.setProperty("--grid-number", gridSize);
    for (let i = 0; i < (gridSize * gridSize); i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "boxes");
            container.appendChild(div);  
    }
}

// Change box colour on mouseover
function changeColour() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.addEventListener("mouseover", function(e) {
            decideColour(box);  
            e.target.classList.add("colour");
        })
    })
}

// Increment to create rainbow colours (loop around when through)
const hueIncrement = 10;
let hue = 0;

function incrementHue() {
    hue += hueIncrement;
    return hue % 360;
}

// If the box colour variable is set to black, set it to a rainbow hue, else darken the existing hue
function decideColour(box) {
    let colour = `hsl(${incrementHue()}, 100%, 50%)`;
    if (getComputedStyle(box).getPropertyValue("--box-colour") == "black") {
        box.style.setProperty("--box-colour", colour);
    } else {   
        box.style.setProperty("--box-colour", darkenHue(getComputedStyle(box).getPropertyValue("--box-colour"), 10));
    }
}

// Grab the lightness from hsl value and lower it, then return adjusted hsl value
function darkenHue(boxColour, darknessIncrement) {
    let lightness = parseInt(boxColour.slice(-4, -2), 10);
    if (lightness == 0) {
        return boxColour;
    } else {
        lightness = Math.max(lightness - darknessIncrement, 0);
        return boxColour.slice(0, -4) + `${lightness}%)`;
    }
}

makeGrid()
changeColour()

const button = document.getElementById("restart") 

// When button clicked, grid is reset, user is prompted for to input new grid size, new grid is made
button.addEventListener("click", function() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.classList.remove("color");
    }) 
    gridSize = prompt("Please choose a number from 2 - 100.", 16);
    console.log(gridSize);
    while (isNaN(gridSize) | gridSize < 2 | gridSize > 100) {
        gridSize = prompt("Please choose a number from 2 - 100.", 16);
    }
    container.textContent = "";
    makeGrid();
    changeColour();

})

