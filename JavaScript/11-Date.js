const currentDate = new Date();

//Current Year
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let day = currentDate.getDay();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

const now = Date.now();
let seconds = Math.floor(now / 1000);

console.log(`The current date is ${year}-${month}-${date}. Today is ${day} of the week. The current time is ${hours}: ${minutes} and the number of seconds from epoch is ${seconds}`);