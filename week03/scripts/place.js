let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;


const temperature = 95;
const wind = 15;

function calculateWindChill(temp,windSpeed) {
    return 35.74 + 0.6215*temp - 35.75*Math.pow(windSpeed, 0.16) + 0.4275*temp*Math.pow(windSpeed,0.16);
}

const chill = calculateWindChill(temperature, wind);
document.getElementById("chill").innerHTML = chill.toFixed(2);
