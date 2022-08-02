function addToPreviousPrimesArray(previousPrimesArray, primeNumber) {
  previousPrimesArray.push(primeNumber);
}

function isDivisibleByAnyPreviousPrimes(previousPrimesArray, num) {
  for (const i of previousPrimesArray) {
    if (num % i === 0) return true;
  }
  return false;
}

function generatePrimesFrom2ToUntil(num) {
  previousPrimesArray = [];

  addToPreviousPrimesArray(previousPrimesArray, 2);
  addToPreviousPrimesArray(previousPrimesArray, 3);

  for (let i = 5; i <= num; i += 2) {
    if (!isDivisibleByAnyPreviousPrimes(previousPrimesArray, i)) {
      addToPreviousPrimesArray(previousPrimesArray, i);
    }
  }

  return previousPrimesArray;
}

console.log(generatePrimesFrom2ToUntil(100));
