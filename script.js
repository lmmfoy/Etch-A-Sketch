const container = document.getElementById("container");


for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "boxes");
        
        container.appendChild(div);  
}

const boxes = document.querySelectorAll(".boxes");

boxes.forEach(box => {
     box.addEventListener("mouseover", function(e) {
         console.log("hi");
         e.target.style.backgroundColor = "purple";
     }
     )
 })

