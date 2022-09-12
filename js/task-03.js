const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

document.head.insertAdjacentHTML('beforeend',
 "<style>.gallery {display: flex; flex-wrap: wrap} li {margin: 20px 20px 20px 20px; list-style-type: none;}</style>")
const galeryEl = document.querySelector('.gallery');
const listGallery = images.map((image) => {
  return `<li><image src="${image.url}", alt="${image.alt}" width='300' height='200' /></li>`;
})
galeryEl.insertAdjacentHTML("afterBegin", listGallery.join(""));
// debugger
console.log(galeryEl);