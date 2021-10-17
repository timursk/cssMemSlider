const img = document.querySelectorAll('.slider-img'),
      dot = document.querySelectorAll('.dot'),
      dotContainer = document.querySelectorAll('.dot-container'),
      str = document.querySelector('.controls-info');
let index = 0;
const text = ['Real BONK!er', 'Remember NO horny', 'BreaDog', 'We are leaving'];

dotContainer.forEach((item, idx) => {
    item.addEventListener('click', () => { changeSlide(idx) })
});

function changeSlide(idx) {
    removeClass(idx);
    dot[idx].classList.add('active');
    img[idx].classList.add('active');
    if (idx > index) img[idx].classList.add('to-left');
    else img[idx].classList.add('to-right');
    str.textContent = text[idx];
    str.classList.add('to-right');
    index = idx;
    setTimeout(() => {
        img[idx].classList.remove('to-left');
        img[idx].classList.remove('to-right');
        str.classList.remove('to-right');
    },500);
}

function removeClass(idx) {
    dot.forEach((item) => item.classList.remove('active'));
    img.forEach((item) => item.classList.remove('active'));
}