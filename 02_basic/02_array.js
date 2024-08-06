const marvel_Heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

marvel_Heros.push(dc_heros); //marge array
console.log(marvel_Heros); // marge array but not one array to add
console.log(marvel_Heros[3][1]); // fetch perticular data

const allheros = marvel_Heros.concat(dc_heros); 
console.log(allheros); // proper way to all data is marge in single array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = another_array.flat(Infinity) // all array is store to single array
console.log(real_array);

console.log(Array.isArray("Raj")); // this is not a string
console.log(Array.from("Raj")); // from keyword used to convert in string 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

