let userInput = prompt('Enter the number');
try {
    userInput = parseInt(userInput);
    if (userInput % 2 == 0) {
        alert(`The number ${userInput} is even`);
    } else {
        alert(`The number ${userInput} is odd`);
    }
} catch (error) {
    alert(`You have entered a wrong input. Input value should be a Number`);
}