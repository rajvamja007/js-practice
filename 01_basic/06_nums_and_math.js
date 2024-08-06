//--------------------------Numbers-----------------------------

const score = 400
console.log(score); // not declare to specify datatype 

const balance = new Number(400)
console.log(balance); // declare to specific value is Number

console.log(balance.toString().length); // show to how many characters are store the value
console.log(balance.toFixed(2)); // value of float in 2 numbers are declare 

const rupees = 1000000
console.log(rupees.toLocaleString()); // this value is US Dolar to show 
console.log(rupees.toLocaleString('en-IN')); // this value is Indian Rupees to show

//-----------------------------Maths-----------------------------

console.log(Math);
console.log(Math.abs(-4)); // abs used to values converts to Positive
console.log(Math.round(4.6)); // round used to values round figer convert
console.log(Math.ceil(5.1)); // ceil used to value in next number convert (Ex: value is 5.1 and convert to ceil in 6)
console.log(Math.floor(5.9)); // floor used to value in any number enter but convert in same value but round figger convert 
console.log(Math.sqrt(49)); // squre root used to divide a value
console.log(Math.min(5,7,8,4)); // Minimum value show
console.log(Math.max(6,3,8,9)); // Maximum value show

console.log(Math.random()); // random used to fetch the value in between 0 and 1 
console.log(Math.random()*10 + 1); // + 1 used to start to 1 number to * 10 means 9 number between values
console.log(Math.floor(Math.random()*10) + 1); // floor value fetch

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min);
