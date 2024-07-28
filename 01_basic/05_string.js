const name = "Raj Vamja"
const RollNo = "58"

console.log("name is :",name + "  Roll No is :",RollNo + "  in LJ University");

console.log(`My Name is ${name} and my RollNo is ${RollNo}`); // use to BackTicks (`)

const CollageName = new String('LJ-University-Ahemdabad');
//console.log(CollageName[0]);
//console.log(CollageName[5]); // used to which latter which position store

//console.log(CollageName.__proto__); 

console.log(CollageName.length); // Check to how many letter in store 
console.log(CollageName.toUpperCase()); // Uppercase Letter
console.log(CollageName.charAt(3)); // position in value //start to 0 index
console.log(CollageName.indexOf('r')); // check to r letter which position to store

const newString = CollageName.substring(0,4); // how many letters store to 0 to 4 index // last value of 4 is not including
console.log(newString);

const newString1 = CollageName.slice(-13, 2); // reverse string of total letter in value and your requrment number
console.log(newString1);

const newString2 = "    Raj    "
console.log(newString2);
console.log(newString2.trim()); // used to starting and ending space are deleted

console.log(CollageName.split('-')); // which position to used by - in user values and then all of without - values shows