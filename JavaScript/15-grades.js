let userInput = prompt('Enter the grade of the student');
try {
    userInput = parseFloat(userInput);
    if (userInput >= 80 && userInput <= 100) {
        alert('Congratulations!! You have got a grade "A" ');
    } else if (userInput >= 70 && userInput <= 79) {
        alert('You have got a grade "B"');
    } else if (userInput >= 60 && userInput <= 69) {
        alert('You have got a grade "C"');
    } else if (userInput >= 50 && userInput <= 59) {
        alert('You have got a grade "D"');
    } else if (userInput >= 0 && userInput <= 49) {
        alert('You have got a grade "F"');
    } else {
        alert('Input number cannot be less than 0 or greater than 100');
    }
} catch (error) {
    alert('The entered input is invalid. Input can only be a Number');
}