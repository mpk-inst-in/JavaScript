


const base = 1000;
const hours = 20;
const rate = 50;

function getWages(base, hours, rate) {

  const totalWages = base + (hours * rate);
  return totalWages;
}

console.log(getWages(base, hours, rate));