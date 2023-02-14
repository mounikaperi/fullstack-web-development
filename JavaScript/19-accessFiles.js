const fs = require('fs');
fs.readFile('countries.txt', (err, data) => {
  if (err) {
    throw err;
  } 
  console.log(data.toString());
})
fs.readFile('webTechs.txt', (err, data) => {
  if (err) {
    throw err;
  } 
  console.log(data.toString());
})