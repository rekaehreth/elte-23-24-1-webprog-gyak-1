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

copyToClipboardButton.addEventListener("click", async ()=>{
    await navigator.clipboard.writeText(sourceInput.value);
});