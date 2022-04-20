// async await

/* const getTodos = async () => {

  return { message: "Hello F1 cohort!!", to: 'FE1' }
  // throw new Error("Some error Happened !!");

}

const result = getTodos();
// console.log('Result:', result);

result.then(response =>
  console.log('Response:', response)

)
  .catch((err) => {
    console.log(err);
  }) */


const getTodos = async () => {

  const result = await fetch('todos/jan.json');
  if (result.status !== 200) {
    throw new Error('Invalid response');
  }
  console.log(result);
  const data = await result.json();

  return data;
};

console.log('1')
console.log('2')

getTodos().then(todos => console.log('Promise Resolved', todos))
  .catch(error => console.log(error));

console.log('3')
console.log('4')


