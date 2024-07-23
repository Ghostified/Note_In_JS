const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".button");
let notes = document.querySelectorAll(".input-Box");

createButton.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})