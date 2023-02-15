let userInput = prompt('Enter a number');
try {
  let isPrime = false;
  if (parseInt(userInput)) {
    for (let i = 2; i <= userInput / 2; ++i) {
      if (userInput % i == 0) {
        isPrime = true;
        break;
      }
    }
    if (!isPrime) {
      console.log(`${userInput} is a prime number`);
    } else {
      console.log(`${userInput} is not a prime number`);
    }
  }
} catch (error) {
  console.log(`${error}`);
}