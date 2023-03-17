// Oldalbetöltéskor listázd ki az oldal összes hiperhivatkozásának a címét!

const elementsWithReference = document.querySelectorAll("[href]");
const referenceList = document.querySelector("#hivatkozasok");

elementsWithReference.forEach(element => {
    referenceList.innerHTML += `<li>${element.getAttribute("href")}</li>\n`
});