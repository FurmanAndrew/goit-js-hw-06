const inputSize = document.querySelector('#font-size-control');
const magic = document.querySelector('#text');

inputSize.addEventListener('input', (event) =>
{ magic.style.fontSize = event.currentTarget.value + 'px'})