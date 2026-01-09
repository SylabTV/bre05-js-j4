let paragraph = document.getElementById("text");
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() {
    paragraph.style.color = "red";
});