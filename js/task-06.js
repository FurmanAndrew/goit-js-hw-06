const areaInput = document.querySelector('#validation-input');

areaInput.addEventListener('blur', asd)
function asd(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
        
    } else  {
        event.currentTarget.classList.add('invalid');
        event.currentTarget.classList.remove('valid');
    }
}


