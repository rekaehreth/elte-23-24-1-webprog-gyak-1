// Excercise 3 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/03
// When clicking on 2 items in a list, swap their contents


const list = document.querySelector("ul");
let firstElement;

list.addEventListener('click', event => {
    if(!firstElement) {
        firstElement = event.target;
        return;
    }

    let contentToSwap = event.target.innerText;
    event.target.innerText = firstElement.innerText;
    firstElement.innerText = contentToSwap;

    firstElement = undefined;
});