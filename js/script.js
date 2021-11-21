let options = document.querySelectorAll('.header__nav--links');
let slide = document.querySelector('.slide');

options.forEach((ele, index) => {
  ele.addEventListener('mouseover', () => {
    slide.style.left = 100 / options.length * index+'%'
  });
});
