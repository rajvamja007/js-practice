
// object literals

const mySym = Symbol("key1")

const info = {
    name: "Raj",
    "Full Name": "Raj Vamja",
    //mySym : "mykey1",
    [mySym]: "mykey1",
    Age: 20,
    City: "Amreli",
    email: "raj@gmail.com",
    isLoggedIn: false,
    lastDayLoggedIn: ["Monday","Friday"],
}

// console.log(info.name); 
// console.log(info["name"]); // same output fetch
// console.log(info["Full Name"]); // not a . used beacuse of already declare to string value ("Full Name")

// console.log(typeof info.mySym); // mysym is not declare to proper formate then typeof is string
// console.log(typeof info[mySym]);

info.email = "raj2004@gmail.com"
//Object.freeze(info) // freeze keyword used to declare to freeze then not any of changes 
info.email = "raj2004@google.com"
//console.log(info); // this time to Symbol Data type show

info.greeting = function(){
    console.log("Hello JS User");
}
info.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(info.greeting()); // freeze keyword to stop then change a new values
//console.log(info.greeting); // this time to show function are used
console.log(info.greetingTwo()); // this function used to add to new values

