const container = document.querySelector("#container");
const generateGridBtn = document.querySelector("#generate");
const rainbowBtn = document.querySelector("#rainbow");

let mode = "default";

generateGridBtn.addEventListener("click", createGrid);
container.addEventListener("mouseover", changeElementBGColor);
rainbowBtn.addEventListener("click", toggleRainbowMode);

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
    if (event.target.classList.contains("pixel") && mode === "rainbow"){
        event.target.style.backgroundColor = generateRandomRGBColor();
    } else if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = "rgb(0, 0, 0)";
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
        //don't convert null to NaN and stop asking to enter number
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

function toggleRainbowMode() {
    if (mode === "default") {
        rainbowBtn.textContent = "Rainbow mode: ON";
        return mode = "rainbow";
    } else {
        rainbowBtn.textContent = "Rainbow mode: OFF";
        return mode = "default";
    }
}