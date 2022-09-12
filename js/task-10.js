function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate= document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');
console.log(btnCreate);

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
function createBoxes(amount) {
  amount = input.value;
  const newBoxes = [];
  
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.classList.add('styles');
    
    newBox.style.width = 30 + i * 10 + 'px';
    newBox.style.height = 30 + i * 10 + 'px';
  
    newBox.style.backgroundColor = getRandomHexColor();
    newBoxes.push(newBox);
    }
    container.append(...newBoxes);
  }

function destroyBoxes() {
  document.querySelectorAll('#boxes>div').forEach((event) => event.remove())

  input.value = '';
}

console.log(container);





