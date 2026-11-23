const themeToggle = document.getElementById("theme-toggle");
const fontToggle = document.getElementById("font-toggle");
const fontPanel = document.getElementById("font-panel");
const fontDecrease = document.getElementById("font-decrease");
const fontIncrease = document.getElementById("font-increase");
const fontValue = document.getElementById("font-value");

let fontSize = Number(localStorage.getItem("font-size")) || 100;

function changeFontSize(amount) {
    const newSize = fontSize + amount;

    if (newSize >= 80 && newSize <= 150) {
        fontSize = newSize;
        document.body.style.fontSize = fontSize + "%";
        fontValue.textContent = fontSize + "%";
        localStorage.setItem("font-size", fontSize);
    }
}

if (localStorage.getItem("dark-theme") === "true") {
    document.body.classList.add("dark-theme");
}

changeFontSize(0);

themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("dark-theme", isDark);
});

fontToggle.addEventListener("click", function () {
    fontPanel.hidden = !fontPanel.hidden;
});

fontDecrease.addEventListener("click", function () {
    changeFontSize(-10);
});

fontIncrease.addEventListener("click", function () {
    changeFontSize(10);
});