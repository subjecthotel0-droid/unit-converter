/*
* 1 meter = 3.281 feet
* 1 foot = 0.305 meters
* 1 liter = 0.264 gallon
* 1 gallon = 3.785 liters
* 1 kilogram = 2.204 pounds
* 1 pound = 0.453 kgs
*/

// ! theme shifting
const themeBtn = document.getElementById("theme-btn");
const inputField = document.getElementById("input-field");
const errorMsg = document.getElementById("error-msg");
const lenPar = document.getElementById("len-par");
const volPar = document.getElementById("vol-par");
const massPar = document.getElementById("mass-par");

// Theme Toggle
if(themeBtn) {
    themeBtn.onclick = () => {
        themeBtn.classList.toggle("fa-sun");
        document.body.classList.toggle("changeTheme");
    };
}

// Input Handling (Consolidated Vanilla JS)
if(inputField) {
    inputField.addEventListener("input", () => {
        const value = inputField.value;
        const textLength = value.length;

        // 1. Validation: Numbers only
        const valid = /^\d*$/.test(value);
        if (!valid) {
            errorMsg.textContent = "Please enter numbers only.";
            // Optional: Stop processing if invalid
            return; 
        }

        errorMsg.textContent = "";

        // 2. Dynamic Font Sizing (Replaces jQuery block)
        if (textLength < 20) {
            inputField.style.fontSize = "50px";
        } else if (textLength < 40) {
            inputField.style.fontSize = "30px";
        } else {
            inputField.style.fontSize = "20px";
        }

        // 3. Calculations
        // Handle empty input gracefully
        if (value === "") {
            lenPar.innerHTML = "";
            volPar.innerHTML = "";
            massPar.innerHTML = "";
            return;
        }

        const inputVal = Number(value);
        
        lenPar.innerHTML = `${inputVal} m = ${(inputVal * 3.281).toFixed(3)} feet | ${inputVal} feet = ${(inputVal * 0.305).toFixed(3)} m`;
        volPar.innerHTML = `${inputVal} L = ${(inputVal * 0.264).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal * 3.785).toFixed(3)} L`;
        massPar.innerHTML = `${inputVal} kgs = ${(inputVal * 2.204).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal * 0.453).toFixed(3)} kgs`;
    });
    
}
function adjustFontSize() {
    const width = window.innerWidth;
    const inputField = document.getElementById("input-field");
    
    if (width < 600) {
        inputField.style.fontSize = "10vw"; // Very large on mobile
    } else if (width < 1000) {
        inputField.style.fontSize = "5vw";
    } else {
        inputField.style.fontSize = "3rem"; // Fixed on desktop
    }
}

// Run on load and resize
window.addEventListener('resize', adjustFontSize);
window.addEventListener('load', adjustFontSize);   
