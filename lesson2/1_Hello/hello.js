const helloButton = document.querySelector("#HelloButton");

helloButton.addEventListener("click", () => {
    if(document.querySelector("p") !== null) {
        return;
    }

    const worldParagraph = document.createElement("p");
    worldParagraph.innerText = 'World';
    document.body.appendChild(worldParagraph);
});