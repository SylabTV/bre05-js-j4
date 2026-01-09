
let onglet1 = document.getElementById("tab-1-content");
let onglet2 = document.getElementById("tab-2-content");
let onglet3 = document.getElementById("tab-3-content");
let button1 = document.getElementById("tab-1");
let button2 = document.getElementById("tab-2");
let button3 = document.getElementById("tab-3");
button1.addEventListener("click", function() {
    onglet1.style.display = "block";
    onglet2.style.display = "none";
    onglet3.style.display = "none";
});
button2.addEventListener("click", function() {
    onglet1.style.display = "none";
    onglet2.style.display = "block";
    onglet3.style.display = "none";
});
button3.addEventListener("click", function() {
    onglet1.style.display = "none";
    onglet2.style.display = "none";
    onglet3.style.display = "block";
});