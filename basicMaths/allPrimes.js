//How to find all primes from 1 to N.

function countPrimes(n) {
    const primes = 0
   for(let i=0; i< n; i++){
     const isPrime = checkPrime(i)
     if(isPrime) primes++;
   }
   return primes 
}

// function to check number is prime or not?
function checkPrime(n){
    for(let i=2; i*i <= n; i++){
       if(n%i === 0) return false 
    }
    return true
}

countPrimes(100)