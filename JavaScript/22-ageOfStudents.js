const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort(function(a, b){ return (a-b)})
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`The minimum age is ${minAge} and the maximum age is ${maxAge}`);
let median = 0;
if (ages.length % 2 == 0) {
  median = ages[ages.length / 2];
} else {
  median = ages[((ages.length - 1)/2) + ages[ages.length / 2]];
}
console.log(`The median of all the ages of students is ${median}`);
const averageAge = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(`The average age of the student is ${averageAge}`);
const range = maxAge - minAge;
console.log(`The range is ${range}`);
const minAverage = abs(minAge - averageAge);
const maxAverage = abs(maxAge - averageAge);
console.log(`The minAverage and maxAverage are ${minAverage} and ${maxAverage} respectively`);