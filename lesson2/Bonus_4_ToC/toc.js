const tocContainer = document.querySelector("#toc");
const headers = document.querySelectorAll("h1, h2, h3");

function createTocListItem(content) {
    const listItem = document.createElement("li");
    listItem.innerText = content;
    const childContainer = document.createElement("ul")
    listItem.appendChild(childContainer);
    
    return {
        element: listItem,
        child: childContainer,
    };
}

function getParentTocItem(element) {
    return element.parentElement.parentElement
}

let intendedParentElement;
let previousElementTag = "H1";

headers.forEach(header => {
    const { element, child } = createTocListItem(header.innerText);

    if (header.tagName === "H1") {
        intendedParentElement = tocContainer;
    } 
    else if (header.tagName === previousElementTag) {
        intendedParentElement = getParentTocItem(intendedParentElement);
    }
    else if (header.tagName < previousElementTag) {
        intendedParentElement = getParentTocItem(getParentTocItem(intendedParentElement));
    }
    
    intendedParentElement.appendChild(element);
    
    intendedParentElement = child;
    previousElementTag = header.tagName;
});