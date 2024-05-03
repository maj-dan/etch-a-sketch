const container = document.querySelector("#container");

createGrid(container, 16);


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