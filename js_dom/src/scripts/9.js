// selete a DOM element with

const items = document.querySelectorAll('li');


// items.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log('Event in LI');
//     e.target.remove();

//   })
// });

//add a new todo item to the ul

const button = document.querySelector('button');

button.addEventListener('click', e => {
  e.stopPropagation();
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'some new task';
  // ul.append(li);
  ul.prepend(li);

})


const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
})