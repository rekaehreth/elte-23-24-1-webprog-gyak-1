// Excercise 1 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/02
// When pressing the Hello button, write World on the document 
// 1st iteration
    // Create a <p> (paragraph) in the document without text content 
    // Set the innerText property of the paragraph with 'World' when pressing the button 
// 2nd iteration
    // Create the paragraph programatically

const helloButton = document.querySelector("#HelloButton");

helloButton.addEventListener("click", () => {
    if(document.querySelector("p") !== null) {
        return;
    }

    const worldParagraph = document.createElement("p");
    worldParagraph.innerText = 'World';
    document.body.appendChild(worldParagraph);
});