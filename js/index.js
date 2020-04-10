function createGrid(size = 16) {
    const sketchContainer = document.querySelector('.sketch-container');

    sketchContainer.setAttribute("style", `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);

    for (let i = 0; i < size ** 2; i++) {
        const gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
        gridCell.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = '#383636';
            e.target.style.borderColor = 'white';
        });
        sketchContainer.appendChild(gridCell);
    }
}

const clearBtn = document.querySelector('.btn-clear');
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.style.borderColor = '#383636';
    })
});

const resizeBtn = document.querySelector('.btn-resize');
resizeBtn.addEventListener('click', (e) => {
    const size = prompt("Please enter Grid Size: 1 - 64", 16);
    if (!size || size < 1 || size > 64 || isNaN(size)) {
        alert("Size must be between 1 and 64");
    } else {
        document.querySelectorAll('.grid-cell').forEach(cell => {
            cell.remove();
        });
        createGrid(size);
    }
});

window.addEventListener('load', () => createGrid());