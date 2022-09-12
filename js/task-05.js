const inputVal = document.querySelector('input#name-input');
const spanResult = document.querySelector('span#name-output');

inputVal.addEventListener('input', event =>
    spanResult.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous'
);
    
