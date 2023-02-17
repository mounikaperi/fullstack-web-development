// Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// *
// **
// ***
const enteredInput = prompt('Enter the number for the pattern to be printed');
for (let i=0; i<enteredInput; i++) {
  for(let j=0; j<=i; j++) {
    console.log("*");
  }
  console.log();
}
//Print a square pattern, if the input is 3 then the output should be similar to the given output
// ***
// ***
// ***
for (let i=0; i<enteredInput; i++) {
  for (let j=0; j<enteredInput; j++) {
    console.log("*");
  }
  console.log();
}
// Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//   *
//  ***
// *****
for (let i=1; i<=enteredInput; i++) {
  for (let j=1; j<=enteredInput-i; j++) {
    console.log(' ');
  }
  for (let k=0; k< 2*i-1; k++) {
    console.log('*');
  }
  console.log();
}