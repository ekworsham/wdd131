// ************code for footer****************//
let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`

// ************code for hamburger icon****************//
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

//**********************blowers******************//

const blowers = [
    {
        blowerName: "Stihl BR 86 Handheld",
        imageUrl: "images/handheld.jpg"
    },
    {
        blowerName: "Stihl BR 700 Backpack",
        imageUrl: "images/backpack.jpg"
    },
    {
        blowerName: "Bill Goat F1302H Wheeled",
        imageUrl: "images/pushblower.jpg"
    }
]

const equipment = document.querySelector("#blowers");
if (equipment) {
    blowers.forEach(blower => {
        const unit = document.createElement("div");
        unit.setAttribute("class", "unit");
        unit.innerHTML = `
            <p>${blower.blowerName}</p>
            <img src="${blower.imageUrl}" alt="blower" width="100" height="100" loading="lazy">
        `;
        equipment.appendChild(unit);
    });
}

//**************complete training******************//
function getCount() {
    return localStorage.getItem("count")
}

function addCount() {
    count++;
    localStorage.setItem("count", count)
}
const completeTraining = document.querySelector("#completeTraining");

let count = getCount();

if (completeTraining) {
    completeTraining.addEventListener("click", addCount());
}

//**************review html******************//
const counter = document.querySelector ("#counter");

if (counter) {
    counter.innerHTML = getCount();
}

