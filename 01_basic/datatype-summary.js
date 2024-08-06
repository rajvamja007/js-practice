// Primitive
// 7 types of Primitive : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const Name = "Raj"
const RollNo = 58
const isLoggedIn = false
const Temp = null
const Age = undefined
const value1 = Symbol(123)
const bigNumber = 532874797234783474n

console.table([Name, RollNo, isLoggedIn, Temp, Age, value1, bigNumber]);
console.log(typeof Name);
console.log(typeof RollNo);
console.log(typeof isLoggedIn);
console.log(typeof Temp);
console.log(typeof Age);
console.log(typeof value1);
console.log(typeof bigNumber);

// Non Primitive (Reference)
// Array , Object , Functions

//array
const name1 = ["Raj", "Ayush", "Hevin"];

//object
let obje1 = {
    name: "Raj",
    age: 20
}

//function
const function1 = function() {
    console.log("Hello!!");
}

console.log(typeof name1);
console.log(name1);

console.log(typeof obje1);
console.log(obje1);

console.log(typeof function1);
console.log(function1);
