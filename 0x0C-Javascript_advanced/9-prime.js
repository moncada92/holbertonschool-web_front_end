function countPrimeNumbers () {
  
  function isPrime(num) {
    if (num == 0 || num == 1 || num == 4) return false;
	  for (let x = 2; x < num / 2; x++) {
		  if (num % x == 0) return false;
	  }
	  return true;
  }

  function printPrime(){

    for (let index = 2; index < 101; index++) {
      
      if(isPrime(index)){
        console.log(index);
      }
    }
  }

  printPrime();
}

const timeBefore = performance.now();
countPrimeNumbers();
const timeAfter = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${timeAfter - timeBefore} milliseconds.`);