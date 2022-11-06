import { toggleMenu, resizeWindow } from './menu.js';
import { selectActive,selectChange } from './select.js';

const mediaQueryTablet = window.matchMedia('(min-width: 880px)');

const menu = document.querySelector('.main-nav');
const buttonToggle = document.querySelector('.page-header__toggle');
const buttonToggleIcon = buttonToggle.querySelector('.page-header__toggle-icon');

const form = document.querySelector('#form-order');
const procentContainer = form.querySelector('.form__procent-wrapper');
const procentInput = procentContainer.querySelector('#procent');
const procentTextValue = procentContainer.querySelector('.procent__value');

const selectNotJS = document.querySelector('.select-not-js');
const select = form.querySelector('#type-system');
const selectHeader = select.querySelector('.select__header');
const selectArrow = selectHeader.querySelector('.select__icon');
const selectItemCollection = select.querySelectorAll('.select__item');

const btnSubmit = form.querySelector('#form-submit');

const printValueProcent = (input) => {
    procentTextValue.textContent = String(input.value) + ' %';
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

buttonToggleIcon.classList.add('page-header__toggle-icon--open');
buttonToggle.addEventListener('click', toggleMenu);

window.addEventListener('resize', resizeWindow);

procentInput.addEventListener('change', (evt) => printValueProcent(evt.target));

selectNotJS.classList.add('display-none');
select.classList.remove('display-none');
selectHeader.addEventListener('click', () => selectActive(select));
selectItemCollection.forEach((selectItem) => 
    selectItem.addEventListener('click', () => selectChange(selectItem, select))
);

document.addEventListener( 'click', (evt) => {
	const withinBoundaries = evt.composedPath().includes(select);
 
	if ( ! withinBoundaries ) {
		select.classList.remove('is-active');
        selectArrow.classList.remove('select__icon--close');
        selectArrow.classList.add('select__icon--open');
	}
});

btnSubmit.addEventListener('click', (evt) => evt.preventDefault());