//callback hell problem
// code quality suffers, it becomes unreadable, unmaintainable

const getTodos = (resource, callback) => {

  console.log("Calling from gettodos function...");
  const request = new XMLHttpRequest();


  request.addEventListener('readystatechange', () => {

    // console.log(request)
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText)
      callback(undefined, request.responseText);

    } else if (request.readyState === 4) {
      // console.log("could not fetch data from the server !!")
      callback("could not fetch data", undefined);
    }
  });

  request.open('GET', resource);



  request.send();
}


//callback hell problem

getTodos('todos/jane.json', (err, data) => {

  console.log(data);
  getTodos('todos/john.json', (err, data) => {

    console.log(data);
    getTodos('todos/sachin.json', (err, data) => {

      console.log(data);
    })
  })

})