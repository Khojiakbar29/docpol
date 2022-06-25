VanillaTilt.init(document.querySelectorAll(".service__box"), {
    max: 25,
    speed: 400,
    easing:"cubic-bezier(.03,.98,.52,.99)",
    perspective:500,
    transition:true
});

let offset = 0; // смещение от левого краю
const sliderLine = document.querySelector('.feedback__people-wrapper');

document.querySelector('.feedback__buttons-next').addEventListener('click', function() {
    offset = offset + 400; // offset += 500;
    if (offset > 800) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});

document.querySelector('.feedback__buttons-prev').addEventListener('click', function() {
    offset = offset - 400; // offset -= 500;
    if (offset < 0) {
        offset = 800;
    }
    sliderLine.style.left = - offset + 'px';
});