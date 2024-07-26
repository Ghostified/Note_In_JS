const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".button");
let notes = document.querySelectorAll(".input-Box");


//function to store the notes on the browser
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//Function to create the delete icon in the notes container
createButton.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

//Event listenmer to delete a note when the the delete icon is clicked 
notesContainer.addEventListener("click",function(e){
    if (e.target.tagName == "IMG"){
        e.target.parentElement.remove();
    }
})


