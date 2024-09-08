const prime = (number) => {
  if (number === 2 || number === 3) {
    return true;
  }
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = (number) => {
  if (prime(number)) {
    console.log('yes');
  } else {
    console.log('no');
  }
};

export default sayPrimeOrNot;

// const isPrime = (num) => {
//     if (num < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i += 1) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };
//   const sayPrimeOrNot = (num) => {
//     const text = isPrime(num) ? 'yes' : 'no';
//     console.log(text);
//   };
//   export default sayPrimeOrNot;
