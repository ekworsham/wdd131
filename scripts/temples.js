let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

// code for hamburger icon
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})