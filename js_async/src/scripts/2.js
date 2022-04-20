//Make http requests

const request = new XMLHttpRequest();


request.addEventListener('readystatechange', () => {

  // console.log(request)
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  } else if (request.readyState === 4) {
    console.log("could not fetch data from the server !!")
  }
})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/2');

request.send();
