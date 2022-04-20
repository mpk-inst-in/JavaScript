// Promise based function

const getTodos = (resource) => {

  console.log("Calling from gettodos function...");


  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

      // console.log(request)
      if (request.readyState === 4 && request.status === 200) {
        // console.log(request.responseText)
        // callback(undefined, request.responseText);
        const data = request.responseText;
        resolve(data);

      } else if (request.readyState === 4) {
        // console.log("could not fetch data from the server !!")
        // callback("could not fetch data", undefined);
        reject("could not fetch data from server!!");
      }
    });

    request.open('GET', resource);
    request.send();

  })

}


// const result = getTodos('todos/sachin.json');

// console.log(result);

getTodos('todos/sachin.json').then(data => {
  console.log('Promise resolved;', data);
}).catch(err => {
  console.log('Promise rejected;', err);
})


