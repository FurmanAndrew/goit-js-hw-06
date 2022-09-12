
const categoriesEl = document.querySelector('ul#categories');
const numberListItem = categoriesEl.children.length;
console.log(`Number of categories: ${numberListItem} `);

const listOneCategories = document.querySelectorAll('.item');

listOneCategories.forEach (function (categ) {console.log(`Category: ${categ.firstElementChild.textContent}`);
console.log(`Elements: ${categ.lastElementChild.children.length}`)})

