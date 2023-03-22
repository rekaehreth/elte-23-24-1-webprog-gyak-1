// Excercise 4 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/03
// Create an input field that only accepts numeric values

const input = document.querySelector("input");
let previousValue = '';

function inputEventHandler(event) {
    if (event.target.value === '') {
        previousValue = event.target.value;
    
        return;
    }
    
    if (parseInt(event.target.value, 10).toString() !== event.target.value) {
        event.target.value = previousValue;
        event.preventDefault();
    
        return;
    }

    previousValue = event.target.value;
}

input.addEventListener('input', inputEventHandler);
