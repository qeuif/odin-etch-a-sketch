const BORDER_SIZE = 1;
const CONTAINER_LENGTH = 900;
let totalDivs = 16;
let divLength = (CONTAINER_LENGTH / totalDivs) - (2 * BORDER_SIZE);

const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = `${(divLength + 2 * BORDER_SIZE) * 16}px`;
container.style.border = "2px solid black";

drawGrid(totalDivs);

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", (event) => {
    const gridList = document.querySelectorAll(".grid");
    for (let grid of gridList) {
        resetGrid(grid);
    }
})

const adjust = document.querySelector(".resize");
adjust.addEventListener("click", () => {
    while (totalDivs < 2 || totalDivs > 100) {
        totalDivs = prompt("Change number of squares per side (Enter a number between 2 and 100 inclusive):");
    }
    removeGrid();
    drawGrid(totalDivs);
});



function colourGrid(div) {
    let isRandomColourChecked = document.getElementById("random-colour").checked;
    if (!isRandomColourChecked) {
        div.style.backgroundColor = "rgb(0, 0, 255)";
    } else {
        let red = getRandomIntInclusive(0, 255);
        let green = getRandomIntInclusive(0, 255);
        let blue = getRandomIntInclusive(0, 255);
        div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

function resetGrid(div) {
    div.style.backgroundColor = "white";
}

function resizeGrid() {
    totalDivs = prompt("Change number of squares per side (Enter a number between 4 and 100 inclusive):");
}

function drawGrid(totalDivs) {
    for (let i = 0; i < totalDivs * totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = `${divLength}px`;
        div.style.height = `${divLength}px`;
        div.style.border = `${BORDER_SIZE}px dotted gray`;
        div.addEventListener("mouseenter", (event) => {
            colourGrid(div);
        });
        container.appendChild(div);
    }
}

function removeGrid() {
    const gridList = document.querySelectorAll(".grid");
    divLength = (CONTAINER_LENGTH / totalDivs) - (2 * BORDER_SIZE);
    for (let grid of gridList) {
        grid.remove();
    }
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function drawDarkeningGrid(totalDivs) {
    for (let i = 0; i < totalDivs * totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.width = `${divLength}px`;
        div.style.height = `${divLength}px`;
        div.style.border = `${BORDER_SIZE}px dotted gray`;
        div.style.opacity = "20%";
        div.addEventListener("mouseenter", (event) => {
            colourGrid(div);
        });
        container.appendChild(div);
    }
}