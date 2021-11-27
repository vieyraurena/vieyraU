function menu() {
  const menuContainer = document.querySelector('.js-menu');
  const hamburguer = document.querySelector('.header__hamburger');
  const close = document.querySelector('.menu__close-button');

  const callMenu = () => {
    menuContainer.style.right = '0px';
  };

  const closeMenu = () => {
    menuContainer.style.right = '-100%';
  };

  hamburguer.addEventListener('click', callMenu);
  close.addEventListener('click', closeMenu);
}

export default menu;
