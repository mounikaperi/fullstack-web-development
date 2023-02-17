const enteredFileName = prompt('Enter the file name with full extension');
if (enteredFileName.trim()) {
  if (enteredFileName.match(/\.[0-9a-z]+$/i)) {
    const extension = enteredFileName.match(/\.[0-9a-z]+$/i)[0];
    console.log(`The extension is ${extension}`);
  } else {
    console.log(`The entered file name ${enteredFileName} is invalid. Please enter the file name along with the extension like (.png, .jpg, .txt, .pdf)`);
  }
} else {
  console.log(`The entered file name is empty. Please enter the file name along with the extension`)
}