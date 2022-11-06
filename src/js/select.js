const selectNotJS = document.querySelector('.select-not-js');
const select = document.querySelector('#type-system');
const selectHeader = select.querySelector('.select__header');
const selectArrow = selectHeader.querySelector('.select__icon');
const selectCurrent = selectHeader.querySelector('.select__current');

const selectActive = (select) => {
    select.classList.toggle('is-active');
    
    if (selectArrow.classList.contains('select__icon--open')) {
        selectArrow.classList.remove('select__icon--open');
        selectArrow.classList.add('select__icon--close');
        return 0;
    }

    selectArrow.classList.remove('select__icon--close');
    selectArrow.classList.add('select__icon--open');
}

const selectChange = (item, select) => {
    selectActive(select);
    selectCurrent.textContent = item.textContent;

    // для передачи выбранного значения при отправке формы
    selectNotJS.value = item.textContent;
}

export { selectActive, selectChange }