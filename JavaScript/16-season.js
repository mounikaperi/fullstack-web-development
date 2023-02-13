let userInput = prompt('Enter the season');
let season;
let constants = {
    AUTUMN: 'AUTUMN',
    WINTER: 'WINTER',
    SPRING: 'SPRING',
    SUMMER: 'SUMMER'
}
if (userInput.trim()) {
	userInput = userInput.toLowerCase();
	if(['september','october','november'].includes(userInput)) {
		season = constants.AUTUMN;
	} else if(['december', 'january', 'february'].includes(userInput)) {
		season = constants.WINTER;
	} else if(['march', 'april', 'may'].includes(userInput)) {
		season = constants.SPRING;
	} else if (['june', 'july', 'august'].includes(userInput)) {
		season = constants.SUMMER; 
	} else {
		alert('The entered month is not a valid month of the year. Possible values are January, February, March, April, May, June, July, August, September, October, November, December');
	}
	alert(`The entered month ${userInput} belongs to the season ${season}`);
} else {
	alert('The input cannot be empty.');
}