// grab the text related to a html element and also modify the content.

const para = document.querySelector('p');

// console.log(para.innerText);


const content = document.querySelector('.content');

// console.log(content.innerHTML);

content.innerHTML = '<h2>' + 'NEWEST CONENT' + '</h2>';

const persons = ['sachin', 'rahul', 'Smriti'];

persons.forEach(person => {

  console.log(person);
  content.innerHTML += `<p> ${person} </p>`;
})


