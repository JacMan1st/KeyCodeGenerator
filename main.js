
document.addEventListener("DOMContentLoaded", ()=>{
    const welcomeMessage = document.getElementById("welcome");
    const mainContent = document.getElementById("mainContent");

    setTimeout(()=>{
        welcomeMessage.style.opacity = "0";

        setTimeout(()=>{
            welcomeMessage.style.height = "0";
            mainContent.style.display = "flex";

            mainContent.offsetHeight;
            
            mainContent.classList.add("visible");

            // hidden input field to show  keyboard
            document.getElementById("hiddenInput").focus();
        },900);
    }, 4000);
});


const displayKey = document.querySelector(".key h2");
const displayKeyCode = document.querySelector(".keyCode h2");

window.addEventListener("keydown", (event) => {
    displayKey.innerText = event.key;
    displayKeyCode.innerText = event.keyCode;
})