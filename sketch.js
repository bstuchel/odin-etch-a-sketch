function createGrids() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < 16; i++) {
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

createGrids();
