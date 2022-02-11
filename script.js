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

function changeColour() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.addEventListener("mouseover", function(e) {
            randomColour(box);  
            e.target.classList.add("colour");
        })
    })
}

function randomColour(box) {
    let colour = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(colour);
    if (getComputedStyle(box).getPropertyValue("--box-colour") == "black") {
        box.style.setProperty("--box-colour", colour);
    } else {
        box.style.setProperty("--box-colour", toRGB(box));
        console.log(toRGB(box));
    }
}

function toRGB(box) {
    let r = 0, g = 0, b = 0;
    let boxColour = getComputedStyle(box).getPropertyValue("--box-colour");

    if (boxColour.length == 4) {
        r = "0x" + boxColour[1] + boxColour[1];
        g = "0x" + boxColour[2] + boxColour[2];
        b = "0x" + boxColour[3] + boxColour[3];
    } else if (boxColour.length == 7) {
        r = "0x" + boxColour[1] + boxColour[2];
        g = "0x" + boxColour[3] + boxColour[4];
        b = "0x" + boxColour[5] + boxColour[6];
    }

    return "rgb("+ (+r - 25.5) + "," + (+g - 25.5) + "," + (+b - 25.5) + ")";
}




// function blackFade(colour) {
//     let r = parseInt(colour.substring(1, 4), 16);
//     r *= .9    
//}



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

let boxColour = Math.floor(Math.random()*16777215).toString(16);

