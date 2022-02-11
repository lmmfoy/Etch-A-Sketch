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
            e.target.classList.add("color");
        }
        )
    })
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

