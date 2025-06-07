const changeColor = document.getElementById('change-bk-color');
const changeBk = document.querySelector(".change-color");
const outPut = document.getElementById("out-put");
const copyColor = document.getElementById("copy-color");

let randomColor = "";

function randomColorGen() {
    // Generates Random Hex Colour
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    
    // Set Random Background Colour 
    changeBk.style.backgroundColor = randomColor;
 
    // Out Put the Colour Value
    outPut.textContent = `The colour is: ${randomColor}`;
};

changeColor.addEventListener("click", randomColorGen); 

// Copy Output value
copyColor.addEventListener("click", () => {
    navigator.clipboard.writeText(randomColor)
    .then(() => alert(`${randomColor}`))
    .catch(err => console.error("Error copying", err));
});

