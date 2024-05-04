const container = document.querySelector("#container");
const generateGridBtn = document.querySelector("#generate");

generateGridBtn.addEventListener("click", createGrid);
container.addEventListener("mouseover", changeElementBGColor);

function createGrid() {
    const resolution = getValidNumber();
    //don't remove grid if cancel is pressed in prompt
    if (resolution === null) return;

    removeOldLines();

    for (let line = 1; line <= resolution; line++) {
        const lineElement = document.createElement("div");
        lineElement.classList.add("line");
        for (let col = 1; col <= resolution; col++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            lineElement.appendChild(pixel);
        }

        container.appendChild(lineElement);
    }

    const newlines = document.querySelectorAll(".line");
    newlines.forEach(setHeight);
}

function changeElementBGColor(event) {
    if (event.target.classList.contains("pixel")){
        event.target.style.backgroundColor = generateRandomRGBColor();
    }
}

function setHeight(element) {
    //Used getBoundingClientRect to get floating point precision width
    //making it always the same size, no matter the resolution of the grid
    const pixelWidth = document.querySelector(".pixel").getBoundingClientRect().width;
    element.style.height = `${pixelWidth}px`;
}

function getValidNumber() {
    let number

    do{
        number = prompt("Enter a number for the grid size, from 2 up to 100: ");
        if (number === null) return number;
    } while (parseInt(number) < 2 || 
    parseInt(number) > 100 || isNaN(parseInt(number)));
    
    return parseInt(number);
}

function removeOldLines() {
    const oldLines =document.querySelectorAll(".line");
    oldLines.forEach(element => {
        element.remove();
    });
}

function generateRandomRGBColor() {
    const rgbNumber1 = Math.floor(Math.random() * 256);
    const rgbNumber2 = Math.floor(Math.random() * 256);
    const rgbNumber3 = Math.floor(Math.random() * 256);
    return `rgb(${rgbNumber1}, ${rgbNumber2}, ${rgbNumber3})`;
}