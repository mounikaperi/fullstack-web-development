const userInput = prompt('Enter your age');
let numberOfYearsRequired = 0;
if (userInput >= 18) {
    alert('You are old enough to drive');
} else {
    numberOfYearsRequired = 18 - userInput;
    alert(`You have to wait or ${numberOfYearsRequired} to get the driving License`);
}