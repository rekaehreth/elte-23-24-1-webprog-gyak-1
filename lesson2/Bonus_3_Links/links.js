// Excercise 8 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/02
// When loading the site, list all hyperlinks from it

const elementsWithReference = document.querySelectorAll("[href]");
const referenceList = document.querySelector("#hivatkozasok");

elementsWithReference.forEach(element => {
    referenceList.innerHTML += `<li>${element.getAttribute("href")}</li>\n`
});