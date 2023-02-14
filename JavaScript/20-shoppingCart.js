const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}
console.log(`Shopping Cart after adding Meat at front and Sugar at the end, ${shoppingCart}`);
const indexOfHoney = shoppingCart.indexOf('Honey');
if (indexOfHoney !== -1) {
  shoppingCart.splice(indexOfHoney, 1);
} else {
  console.log('Honey is not present in the shoppingCart');
}
const indexOfTea = shoppingCart.indexOf('Tea');
if (indexOfTea !== -1) {
  shoppingCart[indexOfTea] = 'Green Tea';
} else {
  console.log('Tea is not present in the Shopping Cart');
}
console.log(`Shopping Cart after removing Honey and replacing tea with green Tea ${shoppingCart}`);