const container = document.getElementById("container");


for (let i = 0; i < 256; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "boxes");
        
        container.appendChild(div);  
    
}

