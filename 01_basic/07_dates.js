let myDate = new Date()
console.log(myDate); // Date is Correct not Proper format
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); // Proper way to fetch date 

let myCreated = new Date(2004 , 5 , 2 , 12 , 6) // enter single digites to month start in 0 and  (0 is first January Month to start)
console.log(myCreated);
console.log(myCreated.toLocaleString()); // your requriment wise create a date and time

//let myNewDate = new Date("2004-06-02");
let myNewDate = new Date("02-06-2004"); // double digite time start to 01 in month
console.log(myNewDate.toLocaleString());

console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // this is a month in 7
console.log(newDate.getDay()); // Day of 3 means wendesday
console.log(newDate.getDate()); // Date of 31