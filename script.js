const container = document.getElementById("container");


for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "boxes");
        
        container.appendChild(div);  
}

const boxes = document.querySelectorAll(".boxes");

boxes.forEach(box => {
     box.addEventListener("mouseover", function(e) {
         e.target.classList.add("color");
     }
     )
 })

const button = document.getElementById("restart") 

button.addEventListener("click", function() {
    boxes.forEach(box => {
        box.classList.remove("color");
    }) 
})

