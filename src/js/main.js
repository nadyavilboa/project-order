const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');

const menu = document.querySelector('.main-nav');
const buttonToggle = document.querySelector('.page-header__toggle');

const toggleMenu = () => {
    console.log('toggle');
    if(menu.classList.contains('main-nav--script-close')) {
        menu.classList.remove('main-nav--script-close');
        menu.classList.add('main-nav--script-open');

        buttonToggle.classList.remove('page--header__toggle--open');
        buttonToggle.classList.add('page--header__toggle--close');
    } else {
        menu.classList.remove('main-nav--script-open');
        menu.classList.add('main-nav--script-close');

        buttonToggle.classList.remove('page--header__toggle--close')
        buttonToggle.classList.add('page--header__toggle--open');
    }
}

const resizeWindow = () => {
    if (mediaQueryTablet.matches) {
      menu.classList.remove('main-nav--script-close');
    } else {
      menu.classList.add('main-nav--script-close');
    }
}

if (!mediaQueryTablet.matches) {
    menu.classList.add('main-nav--script-close');
} else {
    if(menu.classList.contains('main-nav--script-close')) {
      menu.classList.remove('main-nav--script-close');
    }
  
    if(menu.classList.contains('main-nav--script-open')) {
        menu.classList.remove('main-nav--script-open');
    }
}

buttonToggle.classList.add('page--header__toggle--open');
buttonToggle.addEventListener('click', toggleMenu);

window.addEventListener('resize', resizeWindow);