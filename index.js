$(document).ready(function(){
    $('.stocks__advantages-slides').slick({
        dots: true,
        prevArrow: false,
        nextArrow: '<button class="next-btn"><img src="./img/right-arrow.svg"></button>',
    });
});
function moveElement() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        var element = document.getElementById("actionsBlock1");
        var container = document.getElementById("franchises-wrapper");

        container.appendChild(element);
    } else {
        var element = document.getElementById("actionsBlock1");
        var originalContainer = document.getElementById("actions_wrapp_blocks");

        originalContainer.appendChild(element);
    }
}

moveElement();

window.addEventListener("resize", moveElement);
