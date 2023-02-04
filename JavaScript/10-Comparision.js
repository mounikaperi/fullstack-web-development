let greaterThan = ( 4 > 3) ? true : false;
let greaterThanOrEqualTo = (4 >= 3) ? true : false;
let lessThan = ( 4 < 3 ) ? true : false;
let lessThanOrEqualTo = ( 4 <= 3) ? true : false;
let equalTo = ( 4 == 4) ? true : false;
let strictEqualTo = ( 4 === 4) ? true : false;
let notEqualTo = ( 4 != 4) ? true : false;
let strictNotEqualTo = ( 4 !== 4 ) ? true : false;
let stringNotEqualTo = ( 4 != '4') ? true : false;
let stringEqualTo = ( 4 == '4') ? true : false;
let stringStrictEqualTo = (4 === '4') ? true : false;

let text3 = "python";
let text4 = "jargon";
let falsyComparision = (text3.length === text4.length) ? true : false;

console.log(greaterThan)
console.log(greaterThanOrEqualTo)
console.log(lessThan)
console.log(lessThanOrEqualTo)
console.log(equalTo)
console.log(strictEqualTo)
console.log(notEqualTo)
console.log(strictNotEqualTo)
console.log(stringNotEqualTo)
console.log(stringEqualTo)
console.log(stringStrictEqualTo)
console.log(falsyComparision)

falsyComparision = text3 && text4;
console.log(falsyComparision)