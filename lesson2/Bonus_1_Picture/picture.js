// Egy szöveges beviteli mezőben legyen lehetőség megadni egy interneten elérhető kép URL-jét. 
// Egy mellette lévő gombra kattintva jelenítsd meg a képet a dokumentumban!

// https://zoobudapest.com/uploads/collection/27/image/kis%20panda28%20foto%20Bagosi%20Zoltan_logo.JPG
// https://kafkadesk.org/wp-content/uploads/2019/05/high-tatras-e1558533883328.jpg
// https://www.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg

const urlInput = document.querySelector("input[name='picture']");
const displayButton = document.querySelector("#displayButton");
const pictureContainer = document.querySelector("#pictureContainer");

displayButton.addEventListener("click", () => {
    pictureContainer.setAttribute("src", urlInput.value);
});