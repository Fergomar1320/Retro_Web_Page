// JavaScript source code
function loadGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "Games.html");
    xhttp.send();
}

function loadMovie() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "HTMLPage1.html");
    xhttp.send();
}

$(function () {
    $("hide").click(function () {
        $("#Poster").hide();
    });
});

$("#Poster").mouseover(function () {
    $(this).css({
        "left": Math.random() * 500 + "px",
        "top": Math.random() * 500 + "px"
    });
});
