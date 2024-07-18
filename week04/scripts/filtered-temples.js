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

const temples = [
    {
      
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Accra Ghana",
      location: "Cantonments, Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
      templeName: "Adelaide Australia",
      location: "Australia",
      dedicated: "2000, June, 15",
      area: 10700,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x225/adelaide-australia-temple-lds-866420-wallpaper.jpg"
    },  
];


const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newSelector = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");
const pageTitle = document.querySelector("#pageTitle");

home.addEventListener("click", () => {
  createTempleCard(temples);
  pageTitle.innerHTML = "HOME";
});

old.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.dedicated.substring(0, 4) < 1900)))
  pageTitle.innerHTML = "OLD";
  
});

newSelector.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.dedicated.substring(0, 4) > 2000)))
    pageTitle.innerHTML = "NEW";
});

large.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area > 90000)))
  pageTitle.innerHTML = "LARGE";
});

small.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => (temple.area <10000)))
  pageTitle.innerHTML = "SMALL";
});

createTempleCard(temples);

// fucntions are reusable code to call in HTML
function createTempleCard(filteredTemples) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    // Modifying the DOM (Document Object Model)
    let card = document.createElement("section");
    let templeName = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    templeName.textContent = temple.templeName;
    location.innerHTML =`<span class-"label">Location:</span> ${temple.location}`;
    dedicated.innerHTML =`<span class-"label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML =`<span class-"label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);

  });
}