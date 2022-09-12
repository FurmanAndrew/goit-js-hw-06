

const logIn = document.querySelector('form.login-form');
logIn.addEventListener('submit', addLogin);
function addLogin(event) {
    event.preventDefault();

    const innerInputv = event.currentTarget.elements;
    
    const valueName = innerInputv.email.value;
    const valuePass = innerInputv.password.value;
    if (valueName === '' || valuePass === '') {
        alert ('Fill in all input fields!')
    return
    } else {
        console.log ({Email:valueName, Password:valuePass});
        event.currentTarget.reset();
    }
}

