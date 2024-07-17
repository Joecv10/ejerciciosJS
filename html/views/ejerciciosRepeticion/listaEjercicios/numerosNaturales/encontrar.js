function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

export function findSpecialNumbers() {
  let specialNumbers = [];

  for (let num = 1200; num <= 2000; num++) {
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i !== num / i) {
          divisors.push(num / i);
        }
      }
    }

    if (divisors.length === 4 && divisors.includes(5) && divisors.includes(1)) {
      let possiblePrime = divisors.find((d) => d !== 1 && d !== 5 && d !== num);
      if (isPrime(possiblePrime)) {
        specialNumbers.push(num);
      }
    }
  }

  return specialNumbers;
}
