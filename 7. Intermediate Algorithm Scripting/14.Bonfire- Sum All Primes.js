//Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  sum = 0;
  for (var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

function isPrime(num){
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    } 
   }
  return true;
}

sumPrimes(10);