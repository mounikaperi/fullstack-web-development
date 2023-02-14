let enteredYear = prompt(`Enter the year`);
let enteredMonth = prompt('Enter the month or which you want to find number of days');
let numberOfDaysInMonth = 0;
let isYearLeap = (enteredYear % 400 == 0) ? true : false; 
if (enteredMonth.trim()) {
  enteredMonth = enteredMonth.toLowerCase();
  if (['january', 'march', 'may', 'july', 'august', 'october', 'december'].includes(userInput)) {
    numberOfDaysInMonth = 31;
  } else if (['april', 'june', 'september', 'november'].includes(userInput)) {
    numberOfDaysInMonth = 30;
  } else if ('february' === userInput) {
    numberOfDaysInMonth = isYearLeap ? 29 : 28;
  } else {
    alert('The entered month is not valid. The expected values are January, February, March, April, May, June, July, August, September, October, November, December');
  }
  alert(`The entered month ${userInput} has ${numberOfDaysInMonth} days`);
} else {
  alert('The input cannot be empty');
}