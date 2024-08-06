let score = "33abc" // 33 is number and "33abc" is string type

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // variable typeof is number and score typeof is string
console.log(valueInNumber); // values is NaN (Not a Number)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true=1, false=0


//-------------------------------------

let isLoggedIn = "Raj" // 1=true, 0=false / "" => fasle / "Raj" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//------------------------------------ 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // Number to String Conversion

//----------------------------------Opration----------------------------------

//---------------------------------------
let value = 3
let negValue = -value
console.log(negValue); //convert into Negative value

//-----------------------------------------

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3);

let str1 = "Hello "
let str2 = "Friends"

let str3 = str1 + str2
console.log(str3); // Add to string 

//--------------------------------------

console.log("1"+2);
console.log(2+"1");
console.log("1"+2+2);
console.log(2+2+"1");

console.log((3 + 4) * 5 % 6); // difficulat

//----------------------------------------

console.log(+true); // value is 1
console.log(+""); // value is 0

//----------------------------------------

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num1,num2,num3); // all of value is 4

//-----------------------------------------

let gameCOunter = 100
gameCOunter++;
console.log(gameCOunter); // adding 1 values
