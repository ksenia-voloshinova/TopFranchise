$(document).ready(function(){
    $('.stocks__advantages-slides').slick({
        dots: true,
        prevArrow: false,
        nextArrow: '<button class="next-btn"><img src="./img/right-arrow.svg"></button>',
    });
});
function moveElement() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        const element = document.getElementById("actionsBlock1");
        const container = document.getElementById("franchises-wrapper");

        container.appendChild(element);
    } else {
        const element = document.getElementById("actionsBlock1");
        const originalContainer = document.getElementById("actions_wrapp_blocks");

        originalContainer.appendChild(element);
    }
}

moveElement();

window.addEventListener("resize", moveElement);


function addHoverEffect(element) {
    const childElement = element.querySelector('.franchise_item_hint'); // замените '.yourChildElement' на селектор вашего дочернего элемента
    element.addEventListener('mouseover', function() {
        childElement.classList.add('hovered');
    });
    element.addEventListener('mouseout', function() {
        childElement.classList.remove('hovered');
    });
}

const elementsArray = document.querySelectorAll('.right'); // замените '.yourElements' на селектор, который выберет ваши элементы

elementsArray.forEach(function(element) {
    addHoverEffect(element);
});

document.querySelectorAll('.franchise_item_hint').addEventListener('click', (e)=>{
    console.log(e.target.dataset.itemid);
})







