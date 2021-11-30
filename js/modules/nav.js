function nav() {
  const options = document.querySelectorAll('.header__nav--links');

  const slide = document.querySelector('.slide');
  
  options.forEach((ele, index) => {
    ele.addEventListener('mouseover', (event) => {
      slide.style.left = 100 / options.length * index +'%';
    });
  });
}

export default nav;
