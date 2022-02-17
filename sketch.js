function createGrids(gridSize) {
    const grid = document.getElementById("grid");
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < gridSize; i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("grid-element");
            row.appendChild(gridElement);
            gridElement.addEventListener("mouseenter", hover);
        }
        grid.appendChild(row);
    }
}

function hover() {
    this.classList.add("active");
}

function clear(){
    let gridSize = parseInt(prompt("Please enter the grid size, max size = 100", "16"));
    if (gridSize > 100) { gridSize = 100 };
    document.getElementById("grid").innerHTML = "";
    createGrids(gridSize);
}

document.getElementById("clear-button").addEventListener("click", clear);

createGrids(16);