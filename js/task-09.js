
const bodyPage = document.querySelector('body');
const btnColor = document.querySelector('button.change-color');
const valueColor = document.querySelector('span.color');

btnColor.addEventListener('click', changeColor);
function changeColor(event) {
   let color = '';
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  color = getRandomHexColor();
  bodyPage.style.backgroundColor = color;
valueColor.textContent = color;
}

console.log(valueColor);