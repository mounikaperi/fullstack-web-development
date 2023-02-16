const evenArray = [];
const oddArray = [];
for (let i = 0; i<=100; i++) {
  (i % 2 == 0) ? evenArray.push(i) : oddArray.push(i);
}
console.log(`Array of Even numbers is ${evenArray}`);
console.log(`Array of Odd Numbers is ${oddArray}`);