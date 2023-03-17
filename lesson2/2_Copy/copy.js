// Excercise 6 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/02
// Create an input field, 3 buttons and 6 other (destination) input fields
// Buttons should do the following
    // 1st button: Copy the value of the first input to the first destination field 
    // 2nd button: Copy the value of the first input to all the destination fields
    // 3rd button: Copy the value of the first input to the clipboard

const sourceInput = document.querySelector("#sourceInput");
const copyToOneButton = document.querySelector("#copyToOneButton");
const copyToAllButton = document.querySelector("#copyToAllButton");
const copyToClipboardButton = document.querySelector("#copyToClipboard");

copyToOneButton.addEventListener("click", ()=>{
    const destinationInput = document.querySelector(".destinationInput");
    destinationInput.value = sourceInput.value;
});

copyToAllButton.addEventListener("click", ()=>{
    const destinationInputList = document.querySelectorAll(".destinationInput");
    destinationInputList.forEach(input => {
        input.value = sourceInput.value;
    })
});

// We will talk some more about async functions later during the course
copyToClipboardButton.addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(sourceInput.value);
});