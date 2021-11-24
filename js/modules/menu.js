function menu () {
  let menu = document.querySelector('.js-menu');
  let hamburguer = document.querySelector('.header__hamburger');
  let close = document.querySelector('.menu__close-button');

  const callMenu = () => {
    menu.style.right = '0px';
  }

  const closeMenu = () => {
    menu.style.right = '-100%';
  };

  hamburguer.addEventListener('click', callMenu);
  close.addEventListener('click', closeMenu);
}

export default menu
