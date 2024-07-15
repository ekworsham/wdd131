let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modification: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averageRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averageRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averageRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averageRating: 3.9
    },
    {   
        id: "jj-1969",
        name: "warp equalizer",
        averageRating: 5.0
    }
  ];