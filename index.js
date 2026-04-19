convertBtn = document.getElementById("convert-btn");
modeToggleBtn = document.getElementById("mode-toggle-btn");
lengthText = document.getElementById("length-text");
volumeText = document.getElementById("volume-text");
massText = document.getElementById("mass-text");

modeToggleBtn.addEventListener("click", function(){
    if (document.body.classList.contains("light-mode")){
        document.body.classList.remove("light-mode");
        modeToggleBtn.textContent = "☀️ Light Mode";
    }
    else{
        document.body.classList.add("light-mode");
        modeToggleBtn.textContent = "🌙 Dark Mode";
    }
})

convertBtn.addEventListener("click", function(){
    let valueToBeConverted = document.getElementById("input-el").value;
    if (valueToBeConverted === "" || isNaN(valueToBeConverted)) {
        alert("Please enter a valid value to convert.");
        return;
    }
    convertLength(valueToBeConverted);
    convertVolume(valueToBeConverted);
    convertMass(valueToBeConverted);
})

function convertLength(length) {
    const metersToFeet = length * 3.28084;
    const feetToMeters = length / 3.28084;
    lengthText.innerHTML = `${length} meters = <span class="convertedValue">${metersToFeet.toFixed(3)} feet</span> | ${length} feet = <span class="convertedValue">${feetToMeters.toFixed(3)} meters</span>`
}

function convertVolume(volume) {
    const litersToGallons = volume * 0.264172;
    const gallonsToLiters = volume / 0.264172;
    volumeText.innerHTML = `${volume} liters = <span class="convertedValue">${litersToGallons.toFixed(3)} gallons</span> | ${volume} gallons = <span class="convertedValue">${gallonsToLiters.toFixed(3)} liters</span>`
}

function convertMass(mass) {
    const kilogramsToPounds = mass * 2.20462;
    const poundsToKilograms = mass / 2.20462;
    massText.innerHTML = `${mass} kilograms = <span class="convertedValue">${kilogramsToPounds.toFixed(3)} pounds</span> | ${mass} pounds = <span class="convertedValue">${poundsToKilograms.toFixed(3)} kilograms</span>`
}