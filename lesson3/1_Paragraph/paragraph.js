// Excercise 1 from http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti/gyak/03
// Having a paragraph containing text, links and text in <span>, implement
// 1. Clicking on the text 
    // writes on the console the event target, the event type, the mouse button used for clicking, the position of the mouse and the current target of the event
    // if the clicked element is span, writes on the console the text of the element
    // prevents the browser for opening the link if it's text is libero
// 2. Hovering over the text 
    // writes on the console the event target, the event type and the current target of the element
// 3. Left clicking on the paragraph does not open the context menu

const paragraphElement = document.querySelector("p");

paragraphElement.addEventListener("mousedown", mouseDownHandler);
paragraphElement.addEventListener("mouseover", mouseOverHandler);
window.addEventListener("contextmenu", contextMenuHandler );

function mouseDownHandler(event) {
    console.log({
        eventTarget: event.target,
        type: event.type, 
        mouseButton: event.button,
        position: {
            X: event.pageX,
            Y: event.pageY,
        },
        currentTarget: event.currentTarget,
    });

    if(event.target.tagName === "SPAN") {
        console.log(event.target.innerText);
    }

    if(event.target.tagName === "A" && event.target.innerText === "libero") {
        event.preventDefault();
    }
};

function mouseOverHandler(event) {
    console.log({
        eventTarget: event.target,
        type: event.type, 
        currentTarget: event.currentTarget,
    });
}

function contextMenuHandler(event) {
    event.preventDefault();
    console.log(event.button);
}
