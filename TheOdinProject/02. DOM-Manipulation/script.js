const container = document.querySelector("#container")
function bonjour(){
    const content = document.createElement("p")
    content.classList.add("content")
    content.textContent ="Bonjour"
    container.appendChild(content)
}
function colorText(){
    const content = document.createElement("h3");
    content.classList.add("content-color");
    content.style.backgroundColor = "blue";
    content.textContent = "I'm blue h3!";
    container.appendChild(content);
}

function complexContainer () {
    const contentDiv = document.createElement("div");
    const contenth1 = document.createElement("h1");
    const contentP = document.createElement("p");

    contentDiv.style.backgroundColor = "pink"
    contentDiv.style.border = "2px solid black"

    contenth1.textContent = "I'm a div"
    contentP.textContent = "ME TOO!"
    //creation div content
    contentDiv.appendChild(contenth1);
    contentDiv.appendChild(contentP);

    container.appendChild(contentDiv)
    
}