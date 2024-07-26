let score = "33abc" // 33 is number and "33" is string type

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // variable typeof is number and score typeof is string
console.log(valueInNumber); // values is NaN (Not a Number)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true=1, false=0

let isLoggedIn = "Raj" // 1=true, 0=false / "" => fasle / "Raj" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);