const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset-button");


//Default grid on page load

window.addEventListener("load", setDefaultGrid);

function setDefaultGrid(){
    setGridSize(16);
    fillGrid(16);
}

//Changing grid size using reset button
resetButton.addEventListener("click", changeSize);

function changeSize(){
    let newSize = prompt("Enter new size for the grid");
    if(newSize !== null){
        newSize = parseInt(newSize);
        if(newSize<1 || newSize>100 || Number.isNaN(newSize)){
            alert("Enter a number from 1-100 range");
            changeSize();
        }else{
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

//Setting the grid with the user input new size
function setGridSize(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//Creating required divs inside the grid container
function fillGrid(size){
for(i=0;i<size*size;i++){
    const gridElement = document.createElement("div");
    gridElement.classList = ("grid-element");
    gridContainer.appendChild(gridElement);
    gridElement.addEventListener("mouseover", changeColor);

}
}

//Generating a trail of random rgb value on mouseover event
function changeColor(e){
    const randomR = Math.floor(Math.random()*256);
    const randomG = Math.floor(Math.random()*256);
    const randomB = Math.floor(Math.random()*256);

    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function clearGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element)=>{
        gridContainer.removeChild(element);
    });
}




