const enteredWeight = prompt('Enter the weight in KGs');
const enteredHeight = prompt('Enter the height');
const BMI = {
  UNDERWEIGHT: 'Underweight',
  NORMAL: 'Normal',
  OVERWEIGHT: 'Overweight',
  OBESE: 'Obese'
};
const calculateBMI = (weight, height) => {
  return (weight / (height * height));
}
try {
  if (enteredHeight.trim() !== '' && enteredWeight.trim() !== '') {
    const calculatedBMIResult = calculateBMI(parseInt(enteredWeight), parseInt(enteredHeight));
    let response = '';
    if (calculatedBMIResult < 18.5) {
      response = BMI.UNDERWEIGHT;
    } else if (calculatedBMIResult >= 18.5 && calculatedBMIResult <= 24.9) {
      response = BMI.NORMAL;
    } else if (calculatedBMIResult >= 25 && calculatedBMIResult <= 29.9) {
      response = BMI.OVERWEIGHT;
    } else if (calculatedBMIResult >= 30) {
      response = BMI.OBESE;
    }
    console.log(`For your weight and height the Body Mass Index is ${calculatedBMIResult} and you are ${response}`);
  } else {
    console.log('The entered weight and height is empty. Please enter weight and height in Number format!!');
  }
} catch (error) {
  console.log('The weight and height should be Number');
}