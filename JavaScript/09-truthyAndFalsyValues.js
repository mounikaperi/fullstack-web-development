// First one
let enteredValue = "";
let userName = enteredValue || "DEFAULT";
console.log(userName); //Prints "DEFAULT"

//SECOND ONE
userName = enteredValue || null;
console.log(userName); // Prints null

// THIRD ONE
enteredValue = 'Max';
userName = enteredValue || 'Anna';
console.log(userName) // Max

// FOURTH ONE
userName = enteredValue && 'Anna';
console.log(userName) // Anna

// FIFTH ONE
enteredValue = "";
userName = enteredValue && "Anna";
console.log(userName); // false

// Sixth One
enteredValue = "Max";
userName = enteredValue && "";
console.log(userName); // ""

//Seventh One
userName = "Max";
console.log(!!userName); // true

//Eight One
console.log(!userName); // false
