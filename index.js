const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("btn-el")
const refreshButtonEl = document.getElementById("btn2-el")
const paragraphOneEl = document.getElementById("paragraph1-el")
const paragraphTwoEl = document.getElementById("paragraph2-el")
const paragraphThreeEl = document.getElementById("paragraph3-el")


buttonEl.addEventListener("click", function() {
   let meterToFeet = inputEl.value * 3.281
   let feetToMeter = inputEl.value * 0.304
   paragraphOneEl.textContent = ` 
   ${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet |
   ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters
   `
   let literToGallon = inputEl.value * 0.264
   let gallonToLiter = inputEl.value * 4.546
   paragraphTwoEl.textContent = ` 
   ${inputEl.value} liters = ${literToGallon.toFixed(3)} gallons |
   ${inputEl.value} gallons = ${gallonToLiter.toFixed(3)} liters
   `
   let kgToPound = inputEl.value * 2.204
   let poundToKg = inputEl.value * 0.453
   paragraphThreeEl.textContent = ` 
   ${inputEl.value} kilos = ${kgToPound.toFixed(3)} pounds |
   ${inputEl.value} pounds = ${poundToKg.toFixed(3)} kilos
   `
})

refreshButtonEl.addEventListener("click", function() {
    inputEl.value = ""
    paragraphOneEl.textContent = inputEl.value
    paragraphTwoEl.textContent = inputEl.value
    paragraphThreeEl.textContent = inputEl.value
})

