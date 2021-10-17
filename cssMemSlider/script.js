const img = document.querySelectorAll('.slider-img'),
      dot = document.querySelectorAll('.dot'),
      str = document.querySelector('.controls-info');


dot.forEach((item, idx) => {
    item.addEventListener('click', () => { changeSlide(idx) })
});

function changeSlide(idx) {
    removeClass(idx);
    dot[idx].classList.add('active');
    img[idx].classList.add('active');
}

function removeClass(idx) {
    dot.forEach((item) => item.classList.remove('active'));
    img.forEach((item) => item.classList.remove('active'));
}