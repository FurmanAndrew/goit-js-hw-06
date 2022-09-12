const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('ul#ingredients');
const listIngredient = ingredients.map ((ingredient) => 
{const addItem = document.createElement('li');
  addItem.classList.add('item');
  addItem.textContent = ingredient;
  return addItem;
});
ingredientsEl.append(...listIngredient);
console.log(ingredientsEl);