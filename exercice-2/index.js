
let paragraph = document.getElementById("text");
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    if (paragraph.style.color === "red") {
        paragraph.style.color = "black";
        button.textContent = "Rouge";
    } else {
        paragraph.style.color = "red";
        button.textContent = "Noir";
    }  
});