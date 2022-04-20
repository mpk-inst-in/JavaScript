//promise.all
// run independent tasks in parallel


const getTodos1 = async () => {

  console.log('1 Started ..')
  const result = await fetch('todos/jane.json');
  if (result.status !== 200) {
    throw new Error('Invalid response');
  }
  console.log(result);
  const data = await result.json();

  console.log('1 Finished ..');
  return data;
};

const getTodos2 = async () => {

  console.log('2 Started ..')
  const result = await fetch('todos/sachin.json');
  if (result.status !== 200) {
    throw new Error('Invalid response');
  }
  console.log(result);
  const data = await result.json();

  console.log('2 Finished ..');
  return data;
};

async function main() {

  try {

    const data = await Promise.all([getTodos1(), getTodos2()]);

    console.log('1 returned ..', data[0]);
    console.log('1 returned ..', data[1]);

  } catch (error) {

    console.log(error.message);
  }

}

main();