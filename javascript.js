const DIV_LENGTH = 50;
const TOTAL_DIVS = 16 * 16;
const BORDER_SIZE = 1;

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = `${(DIV_LENGTH + 2 * BORDER_SIZE) * 16}px`;
container.style.border = "2px solid black";

for (let i = 0; i < TOTAL_DIVS; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${DIV_LENGTH}px`;
    div.style.height = `${DIV_LENGTH}px`;
    div.style.border = `${BORDER_SIZE}px dashed gray`;
    div.addEventListener("mouseenter", (event) => {
        colourGrid(div);
    });
    container.appendChild(div);
}

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", (event) => {
    const gridList = document.querySelectorAll(".grid");
    for (let grid of gridList) {
        resetGrid(grid);
    }
})

function colourGrid(div) {
    div.style.backgroundColor = "blue";
}

function resetGrid(div) {
    div.style.backgroundColor = "white";
}