//fetch api
// built into javascript language
// returns a promise
// promise is rejected only in case of network failu🚻 

// const result = fetch('todos/sachin.json');

// console.log(result);

fetch('todos/sachin.json').then(response => {
  console.log('Resolved:');
  return response.json()

}).then(data => {
  console.log(data);
}).catch(err => {
  console.log('Rejected: ', err);
})