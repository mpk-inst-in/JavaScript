const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Button Clicked ...')
});


const items = document.querySelectorAll('li');

items.forEach(item => {

  item.addEventListener('click', (e) => {
    console.log('LI clicked');
    console.log(e.target);
    e.target.style.textDecoration = 'line-through';

  })

})

