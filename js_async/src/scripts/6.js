//Javascript Promises 


// promise example 

const getMeSomehting = () => {

  return new Promise((resolve, reject) => {

    // resolve('Found somehting for you !!');
    reject("Did not find anyhting for you !!")

  });
}

// const result = getMeSomehting();
// console.log(result);

/* getMeSomehting().then(data => {
  // resolve flow ...
  console.log('resolve flow:', data);
},

  error => {
    // reject flow
    console.log('reject flow: ', error);
  }

); */

getMeSomehting().then(data => {
  console.log('resolve flow:', data);

}).catch(err => {

  console.log('Reject flow:', err)
})