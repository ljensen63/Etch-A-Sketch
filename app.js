const gridContainer = document.querySelector('.grid-container');
const colorButtonsContainer = document.querySelector('.color-Buttons');
const colorButtons = colorButtonsContainer.querySelectorAll('button');
const clearButton = document.querySelector('.clear');

let currentColor;
colorButtons.forEach(colorButtons => colorButtons.addEventListener('click', () => {
    currentColor = colorButtons.classList[0];
}));

clearButton.addEventListener('click', () => {
    let cells = gridContainer.querySelectorAll('div');
    cells.forEach(cells => clear(cells));
});


//given new size for the grid we remove each cell and then replace it with new grid cells with the new size given
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
    cells.forEach(cells => cells.addEventListener('mouseover', (e) => { addColor(e.target)}));
}
//clears classlist of cell
function clear(cell){
    let classList = cell.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
}

//adds currentColor to classlist of cell
function addColor(e){
    clear(e);
    e.classList.add(currentColor);
}

let newGridButton = document.querySelector('.new-Grid');
newGridButton.addEventListener('click', () => {
    let gridsize = prompt('New Grid Size?');
    newGrid(gridsize);
});

newGrid(16);