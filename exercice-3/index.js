
let paragraph = document.getElementById("text");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
show.addEventListener("click", function() {
    paragraph.style.display = "block";
});
hide.addEventListener("click", function() {
    paragraph.style.display = "none";
});