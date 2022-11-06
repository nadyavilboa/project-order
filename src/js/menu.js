const mediaQueryTablet = window.matchMedia('(min-width: 880px)');

const menu = document.querySelector('.main-nav');
const buttonToggle = document.querySelector('.page-header__toggle');
const buttonToggleIcon = buttonToggle.querySelector('.page-header__toggle-icon');

const toggleMenu = () => {
    if(menu.classList.contains('main-nav--script-close')) {
        menu.classList.remove('main-nav--script-close');
        menu.classList.add('main-nav--script-open');

        buttonToggleIcon.classList.remove('page-header__toggle-icon--open');
        buttonToggleIcon.classList.add('page-header__toggle-icon--close');
    } else {
        menu.classList.remove('main-nav--script-open');
        menu.classList.add('main-nav--script-close');

        buttonToggleIcon.classList.remove('page-header__toggle-icon--close')
        buttonToggleIcon.classList.add('page-header__toggle-icon--open');
    }
}

const resizeWindow = () => {
    if (mediaQueryTablet.matches) {
      menu.classList.remove('main-nav--script-close');
    } else {
      menu.classList.add('main-nav--script-close');
    }
}

export { toggleMenu, resizeWindow }