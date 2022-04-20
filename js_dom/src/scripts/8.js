const article = document.querySelector('article');

console.log(article.children);


// article.children.forEach(() => {
//   console.log('Child')
// });


Array.from(article.children).forEach(child => {
  child.classList.add('art-item')
})

const heading = document.querySelector('h1');
console.log(heading.parentElement);

const para = document.querySelector('p');

console.log(para.nextElementSibling)
console.log(para.previousElementSibling)