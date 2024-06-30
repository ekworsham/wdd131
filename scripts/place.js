let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

const temperature = 50;
const wind = 20;

function calculateWindChill(T,V) {
    return 35.74 = (0.615*T) - (35.75*(Math.pow(V,0.15))) + (0.4275*T)*(Math.pow(V,0,16));
}

const tempElement = document.getElementById("temp");
tempElement.innerHTML = temperature;

document.querySelector("wind").innerText = wind;

const chill = calculateWindChill(temperature, wind);
document.getElementById("chill").innerText = chill.toFixed(2);