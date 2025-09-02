// variable declaration
let age = 20;
let nigerian = false;

// conditional statements
if (age >= 18 && nigerian) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
};



let heading = document.getElementById("intro");
let btn = document.getElementById("submit-btn");
let newElement = document.getElementById("new-elemnt");

let button = document.getElementById("submit-btn");
button.addEventListener("click", function() {

    heading.style.color = "red";
    btn.innerText = "Submitted";
    btn.style.backgroundColor = "green";

    let paragraph = document.createElement("p");
    paragraph.innerText = "This is a new paragraph added to the div.";
    newElement.appendChild(paragraph);
    

});