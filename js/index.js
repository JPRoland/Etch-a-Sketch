function createGrid(size = 16) {
    const sketchContainer = document.querySelector('.sketch-container');

    sketchContainer.setAttribute("style", `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);

    for (let i = 0; i < size ** 2; i++) {
        const gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
        gridCell.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.borderColor = 'white';
        });
        sketchContainer.appendChild(gridCell);
    }
}

const clearBtn = document.querySelector('.header__btn-clear');
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.style.borderColor = 'black';
    })
});

window.addEventListener('load', () => createGrid());