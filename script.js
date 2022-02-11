const container = document.getElementById("container");

let boxSize = 16;

function makeGrid() {
    container.style.setProperty("--grid-number", boxSize);
    for (let i = 0; i < (boxSize * boxSize); i++) {
            let div = document.createElement("div");
            div.setAttribute("class", "boxes");
            
            container.appendChild(div);  
    }
}

makeGrid()


function colourfulBoxes() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.addEventListener("mouseover", function(e) {
            e.target.classList.add("color");
        }
        )
    })
}

colourfulBoxes()

const button = document.getElementById("restart") 

button.addEventListener("click", function() {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => {
        box.classList.remove("color");
    }) 
    boxSize = prompt("Please choose a number from 2 - 100.", 16);
    console.log(boxSize);
    while (isNaN(boxSize) | boxSize < 2 | boxSize > 100) {
        boxSize = prompt("Please choose a number from 2 - 100.", 16);
    }
    container.textContent = "";
    makeGrid();
    colourfulBoxes();

})

