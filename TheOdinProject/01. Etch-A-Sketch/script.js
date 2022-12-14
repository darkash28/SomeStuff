
//to-do rajouter possibilité enregristrer l'image dans le navigateur? 

const DEFAULT_SIZE = 32
const DEFAULT_COLOR = "black"
const cellSize = document.querySelector("#cellSize")
const gridSection = document.querySelector(".grid")

const btnErease = document.querySelector(".clear")
const btnEareaseColor= document.querySelector(".erease")
const btnColor = document.getElementById("color")
const range = document.getElementById("cellSize")


let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE
let mouseDown = false


function setCurrentSize(value){
    currentSize = value
    document.querySelector("#textSize").textContent = "Canvas size: " + value +"x" +value
}

function getCurrentSize(){
    return currentSize
}

function setCurrentColor(value){
    currentColor = value
}

function getCurrentColor(){
    return currentColor
}

function createGrid(){
    const gridContainer = document.createElement("div")
    if (gridSection.children.length <1){
        //create grid
        let value = getCurrentSize()**2
        gridContainer.classList.add("grid-container")
        gridContainer.style.gridTemplateRows = `repeat(${getCurrentSize()}, 1fr)`
        gridContainer.style.gridTemplateColumns = `repeat(${getCurrentSize()}, 1fr)`
        gridSection.appendChild(gridContainer)

        //create cell
        for (let i = 0; i<value; i++)
            {
                const cell = document.createElement("div")
                cell.classList.add("cell")
                cell.id = i
                cell.addEventListener("mouseover",colorCell)
                cell.addEventListener("mousedown",colorCell)
                gridContainer.appendChild(cell)
        
            }
    }
}
function erease(){
    gridSection.innerHTML = " "
  
}

function colorCell(e){
    if (mouseDown){
    document.getElementById(e.target.id).setAttribute("style",`background-color:${getCurrentColor()}`)}
    
}


function PersonlizeColor(){
    setCurrentColor(color.value)
}

function clearGrid(){
    erease()
    createGrid()
}

function setEraeaseColor(){
    setCurrentColor("white")
}


function updateCellSize(){
    setCurrentSize(cellSize.value)
    erease()
    createGrid()
}

function firstGrid(){
    color.value = DEFAULT_COLOR
    setCurrentSize(DEFAULT_SIZE)
    cellSize.value= DEFAULT_SIZE
    createGrid()
}

firstGrid()

gridSection.addEventListener("mousedown", (()=> {mouseDown = true}))
gridSection.addEventListener("mousemove", colorCell)
gridSection.addEventListener("mouseup", ()=>mouseDown = false)

range.addEventListener("change", updateCellSize)
btnErease.addEventListener("click", clearGrid)
btnEareaseColor.addEventListener("click", setEraeaseColor)
btnColor.addEventListener("change", PersonlizeColor)

