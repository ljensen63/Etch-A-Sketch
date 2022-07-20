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