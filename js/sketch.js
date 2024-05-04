const container = document.querySelector("#container");
const generateGridBtn = document.querySelector("#generate");

generateGridBtn.addEventListener("click", createGrid);
container.addEventListener("mouseover", changeElementBGColor);

function createGrid() {
    const size = getValidNumber();

    for (let line = 1; line <= size; line++) {
        const lineElement = document.createElement("div");
        lineElement.classList.add("line");
        for (let col = 1; col <= size; col++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            lineElement.appendChild(pixel);
        }

        container.appendChild(lineElement);
    }

    const lines = document.querySelectorAll(".line");
    lines.forEach(setHeight);
}

function changeElementBGColor(event) {
    if (event.target.classList.contains("pixel")){
        event.target.classList.add("painted");
    }
}

function setHeight(element) {
    const pixelWidth = document.querySelector(".pixel").offsetWidth;
    element.style.height = `${pixelWidth}px`;
}

function getValidNumber() {
    let number

    do{
        number = prompt("Enter a number for the grid size, from 2 up to 100: ");
    } while (parseInt(number) < 2 || parseInt(number) > 100 || isNaN(parseInt(number)));
    
    return parseInt(number);
}