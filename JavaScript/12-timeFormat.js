// YYYY-MM-DD HH:mm format

let date = new Date();
let dateString = date.toLocaleDateString("en-CA", {year: "numeric", month: "2-digit",  day: "2-digit"});
let timeString = date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"});
let formattedDate = `${dateString.replace(/\//g, '-')} ${timeString}`;
console.log(formattedDate);

// DD-MM-YYYY HH:mm format
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday1 = dd + '-' + mm + '-' + yyyy;
console.log(formattedToday1)

// DD/MM/YYYY HH:mm format
const formattedToday2 = dd + '/' + mm + '/' + yyyy;
console.log(formattedToday2)