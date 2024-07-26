const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".button");
let notes = document.querySelectorAll(".input-Box");

//Function to restore and show notes content if browser is refreshed
function showNotes() {
    //if the notes are on the browser , we display them
    notesContainer.innerHTML = localStorage.getItem("notes");
}
//call the show notes function
showNotes();


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

//Event listener to delete a note when the the delete icon is clicked 
notesContainer.addEventListener("click",function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();

        //update storage after deleting notes
        updateStorage();
    }
    else if (e.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            notes.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

//Event listener to add a line break

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");

        //the event overides the enter default function
        event.preventDefault();
        updateStorage();
    }
})


