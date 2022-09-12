const counterValue = document.querySelector('#value');
const btnMinusNumber = document.querySelector('[data-action="decrement"]');
const btnAddNumber = document.querySelector('[data-action="increment"]');
let number = 0;


btnAddNumber.addEventListener('click', addNumber);
btnMinusNumber.addEventListener('click', minusNumber);
function addNumber(event) {
    number += 1;
    counterValue.textContent = numb;
};
function minusNumber(event) {
    number -= 1;
    counterValue.textContent = numb;
}