const getTodos = (callback) => {

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

  request.open('GET', 'todos.json');



  request.send();
}

console.log("1");
getTodos((err, data) => {


  if (err) console.log(err);

  if (data) { console.log(data) }
})
console.log("2");