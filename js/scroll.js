window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("scrollNav").style.display = "block";
} else {
    document.getElementById("scrollNav").style.display = "none";
}
}