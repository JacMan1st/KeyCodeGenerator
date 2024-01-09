


const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");

window.addEventListener("keydown", (event) => {
    displayKey.innerText = event.key;
    displayKeyCode.innerText = event.keyCode;
})