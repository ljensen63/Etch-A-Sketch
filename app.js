const gridSpace = document.querySelector('.grid-space');
console.log(gridSpace);
for (let i = 0; i < 256; i++){
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('cell');
    gridSquare.style.minHeight = '10px';
    gridSquare.style.minWidth = '10px';
    console.log(gridSpace.style.maxWidth);
    gridSpace.appendChild(gridSquare);

}
//given the container & new size for the grid we remove the container and then replace it with new grid container
function replace(gridSpace){
    let newSize = prompt('Please enter new size of grid');
    console.log(newSize);
    document.body.removeChild(gridSpace);
    gridSpace = document.createElement('div');
    gridSpace.classList.add('grid-space');
    gridSpace.style.border = '2px solid black'
    document.body.appendChild(gridSpace);
    for(let k = 0; k < newSize * newSize;k++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('cell');
        gridSquare.style.minHeight = '10px';
        gridSquare.style.minWidth = '10px';
        gridSpace.appendChild(gridSquare);
    } 
}

let newGrid = document.querySelector('.new-Grid');
newGrid.addEventListener('click', replace(gridSpace));