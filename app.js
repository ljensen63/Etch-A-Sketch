const gridContainer = document.querySelector('.grid-container');
const colorButtonsContainer = document.querySelector('.color-Buttons');
const colorButtons = colorButtonsContainer.querySelectorAll('button');
let currentColor;
colorButtons.forEach(colorButtons => colorButtons.addEventListener('click', () => {
    currentColor = colorButtons.classList[0];
}));
//let currentColor = 

//given the container & new size for the grid we remove the container and then replace it with new grid container
function newGrid(gridSize){
    let cells = gridContainer.querySelectorAll('div');
    cells.forEach(cells => cells.remove()); 
    if (gridSize > 100){
        gridSize = 100;
    }
    for(let i = 0; i < (gridSize * gridSize); i++){
        let gridCell = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridContainer.insertAdjacentElement('beforeend', gridCell);
    }
    cells = gridContainer.querySelectorAll('div');
    cells.forEach(cells => cells.addEventListener('mouseover', () => { addColor()}));
    /*
    //console.log(newSize);
    //console.log(document.body.childNodes);
    let gridSpace2 = document.querySelector('.grid-space')
    gridSpace2.removeChild(gridSpace);
    gridSpace = document.createElement('div');
    gridSpace.classList.add('grid');
    gridSpace.style.border = '2px solid black'
    document.body.appendChild(gridSpace);
    for(let k = 0; k < newSize;k++){
        for (let a = 0; a < newSize; a++){
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('cell');
            gridSquare.style.minHeight = '10px';
            gridSquare.style.minWidth = '10px';
            gridSpace.appendChild(gridSquare);
        }
        let breaker = document.createElement('br');
        gridSpace.appendChild(breaker);
    } */

}

function addColor(){
    let cells = gridContainer.querySelectorAll('div');
    cells.forEach(cells => cells.classList.add(currentColor));
}

let newGridButton = document.querySelector('.new-Grid');
newGridButton.addEventListener('click', () => {
    let gridsize = prompt('New Grid Size?')
    //need to figure out why DOM doesn't have the grid as a child of the grid-space when it is getting removed
    newGrid(gridsize);
});

newGrid(16);