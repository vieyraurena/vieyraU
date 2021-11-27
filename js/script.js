import nav from './modules/nav.js';
import menu from './modules/menu.js';

window.onload = () => {
  const transition = document.querySelector(".transition");
  const links = document.querySelectorAll('.header__nav--links');

  transition.classList.remove("js__active");

  links.forEach((anchor) => {
    anchor.addEventListener('click', event => {
      event.preventDefault();
      let target = event.target.href;
      transition.classList.add('js__active');
      
      setTimeout(() => {
        window.location.href = target;

        }, 500);
      })
  })
}

nav();
menu();
