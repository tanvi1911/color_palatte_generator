const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 12;

const generatePalatte = () => {

    container.innerHTML = "";  //clearing the container

    for(let i = 0; i < maxPaletteBoxes; i++) {
        // const element = array[i];
        // generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        // console.log(randomHex);

        // creating a new 'li' element and inserting it to the cointainer
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;

        // adding cick event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }

}

generatePalatte();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerHTML = "Copied";
        setTimeout(() => 
            colorElement.innerHTML = hexVal, 1000
        );
    }).catch(() => alert("Failed to copy the color code!")); //showing alet if color can't be copied
}

refreshBtn.addEventListener("click",generatePalatte);