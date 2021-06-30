// Cuando el usuario scrolle, ejecuta mi funcion
window.onscroll = function () {
    stickyNav()
};

// Obtengo el navbar
var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}