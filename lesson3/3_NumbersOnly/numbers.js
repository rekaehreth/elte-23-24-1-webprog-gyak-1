// Excercise 4 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/03
// Create an input field that only accepts numeric values

const inputContainerDiv = document.querySelector('#inputContainer');

let previousInputValues = [];

function handleInput(event) {
    if(event.target.value === '') {
        previousInputValues[event.target.id] = event.target.value;
        return;
    }
    if(parseInt(event.target.value, 10).toString() !== event.target.value) {
        event.target.value = previousInputValues[event.target.id] ?? '';

        event.preventDefault();
        return;
    }
    previousInputValues[event.target.id] = event.target.value;
};

inputContainerDiv.addEventListener('input', handleInput);


