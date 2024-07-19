let currentYear = document.querySelector("#currentYear");
let lastModified = document.querySelector("#lastModified");
const today = new Date();
currentYear.textContent = today.getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`

// code for hamburger icon
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})











// const blowerM = [
//     {
//     blowerTitle: "BLOWER MAINTENANCE",
//     intro: "Introduction",
//     introM: "Please review the following essential components of the blower and schedule a time with your manager to demonstrate the proper care for this equipment.",
//     purpose: "Purpose",
//     purposeM: "By maintaining this equipment, we recognize the following benefits:",
//     li1: "Durability and Longevity: Regular maintenance helps protect and prolong the lifespan of equipment, reducing the frequency of repairs and part replacements.",
//     li2: "Cost Savings: Maintenance saves costs in the long run and because of the resulting longevity and prolonged lifespan, it reduces the cost of equipment replacement.",
//     li3: "Reliability: Well-maintained equipment is more reliable, reducing the risk of breakdowns and downtime during critical operations or projects.",
//     li5: "Efficiency: Properly maintained equipment operates more efficiently, which can improve productivity and performance.",
//     li6: "Safety: Equipment that is well-maintained is safer to operate, reducing the risk of accidents or malfunctions that could harm operators or others nearby.",
//     li7: "Quality of Work: Maintained equipment ensures consistent quality of work output, meeting or exceeding expectations for clients or stakeholders.",
//     },
// ],

// const home = document.querySelector("#H");
// const blower = document.querySelector("#B");
// const blowerMain = document.querySelector("#BM");
// const logIn = document.querySelector("Li");

// home.addEventListener("click", () => {
//     createBlowerCard(blowerM);
//     pageTitle.innerHTML = "HOME";
//   });

// createBlowerCard(blowerM);

// function createBlowerCard(blower) {
//     document.querySelector(".res-grid").innerHTML = "";
//     blower.forEach(element => {
//         filteredTemples.forEach(temple => {
//         // Modifying the DOM (Document Object Model)
//         let card = document.createElement("section");
//         let templeName = document.createElement("h3");
//         let location = document.createElement("p");
//         let dedicated = document.createElement("p");
//         let area = document.createElement("p");
//         let img = document.createElement("img");
        
//     });
// }
