// alternative to querySelector methods

const title = document.getElementById('title');

// console.log(title);


const errors = document.getElementsByClassName('error');

console.log(errors[0]);

// Doesnot work !!!
// errors.forEach(error => console.log(error));


const pTags = document.getElementsByTagName('p');
console.log(pTags);

