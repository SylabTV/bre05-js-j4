let paragraph = document.getElementsByClassName("closed")[0];
let show = document.getElementsByTagName("span")[0];

show.addEventListener("click", function () {
    if (paragraph.style.display === "block") {
        paragraph.style.display = "none";
    } else {
        paragraph.style.display = "block";
    }
});
