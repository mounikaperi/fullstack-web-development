let userInput = prompt('Enter the month or which you want to find number of days');
let numberOfDaysInMonth = 0;
if (userInput.trim()) {
  userInput = userInput.toLowerCase();
  if (['january', 'march', 'may', 'july', 'august', 'october', 'december'].includes(userInput)) {
    numberOfDaysInMonth = 31;
  } else if (['april', 'june', 'september', 'november'].includes(userInput)) {
    numberOfDaysInMonth = 30;
  } else if ('february' === userInput) {
    numberOfDaysInMonth = 28;
  } else {
    alert('The entered month is not valid. The expected values are January, February, March, April, May, June, July, August, September, October, November, December');
  }
  alert(`The entered month ${userInput} has ${numberOfDaysInMonth} days`);
} else {
  alert('The input cannot be empty');
}