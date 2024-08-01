// array is resizable and Mix of Diffrent Data type used.

const arr = [0,1,2,3,4,5,6]  // declare of array type
//console.log(arr);
//console.log(arr["one"]);  // not proper way then output is undefined but new array value of one then fetch output
//console.log(arr[1]); // select value of no 1

const arr1 = new Array(0,1,2,3,4,5)
//console.log(arr1); // another declaration type

// Array Methods

// arr1.push(6) // push method used to add value in last position
// arr1.push(7) 
// arr1.pop()  // pop method used to remove last value 

//arr1.unshift(9) // unshift method used to add value of first position
//arr1.shift() // shift method used to starting value ex:0 then remove 0 and remaining anothor value are print (unshift method not execute same time then comment of unshift method)

//console.log(arr1.includes(9)); // 9 is include or not and not include the fetch the boolean value of false
//console.log(arr1.indexOf(9)); // another value of fetch index time output is -1
//console.log(arr1.indexOf(3)); // index is 3
//console.log(arr1);

// const newArr = arr1.join() // join() used to convert the datatype of string
// console.log(arr1);
// console.log(typeof newArr); 


//Slice and Splice

console.log("A ",arr1);
const myn1 = arr1.slice(1 , 3) // slice method used to last range is not includes
console.log(myn1);

console.log("B ",arr1);
const myn2 = arr1.splice(1 , 3) // splice method used to 1 to 3 value is remove and remaining values fetch

console.log("C ",arr1);
console.log(myn2);
