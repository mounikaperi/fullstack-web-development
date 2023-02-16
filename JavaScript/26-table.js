let enteredInput = prompt('Enter the number for which table has to be printed');
try {
  if (enteredInput.trim()) {
    enteredInput = parseInt(enteredInput);
    for (let i=1; i<=10; i++) {
      console.log(`${enteredInput} * i = ${(enteredInput * i)}`);
    }
  } else {
    console.log(`The entered input is empty. Please enter a value in Number format`);
  }
} catch (error) {
  console.log('The entered input should be in Number format');
}