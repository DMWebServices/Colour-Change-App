const changeColorBtn = document.getElementById('change-color-btn');
const backgroundEl = document.getElementById("change-color");
const outputEl = document.getElementById("out-put");
const copyBtn = document.getElementById("copy-color");
const historyListEl = document.getElementById("color-history");

let currentColor = "#3498db";
const maxHistory = 5;
const colorHistory = [];

function applycolor(color) {
    backgroundEl.style.backgroundColor = color;
    outputEl.textContent = `Colour is: ${color}`;

    // Update Color History
    colorHistory.unshift(color);
    if ( colorHistory.length > maxHistory ) colorHistory.pop(); // Keep Only 5 colors

    updateColorHistoryList();
}

function updateColorHistoryList() { 
    historyListEl.innerHTML= "";

    colorHistory.forEach((color) => {
        const li = document.createElement("li");
        li.textContent = color;
        li.style.color = color;
        li.style.cursor = "pointer";
        li.title = "Click to copy"

        li.addEventListener("click", () => copyToClipboard(color));
        historyListEl.appendChild(li);       
       
    });
};

function currentColorGen() {
    // Generates Random Hex Colour
    currentColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    
    applycolor(currentColor);
};

// Copy Output value
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(() => alert(`${text}`))
    .catch(err => console.error("Error copying", err));
};

// Event Listeners
backgroundEl.addEventListener("click", currentColorGen); 
copyBtn.addEventListener("click", () => {
    copyToClipboard(currentColor);
});

// First Render
applycolor(currentColor);

