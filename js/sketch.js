const container = document.querySelector("#container");

createGrid(container, 16);

container.addEventListener("mouseover", changeElementBGColor);

function createGrid(parent, size) {
    for (let line = 1; line <= size; line++) {
        const lineElement = document.createElement("div");
        lineElement.classList.add("line");
        for (let col = 1; col <= size; col++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            lineElement.appendChild(pixel);
        }

        parent.appendChild(lineElement);
    }
}

function changeElementBGColor(event) {
    console.log(event.target);
    if (event.target.classList.contains("pixel")){
        event.target.classList.add("painted");
    }
}