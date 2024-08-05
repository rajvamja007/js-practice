const tinderUser = new Object()
//const tinderUser = {} // same are declared

tinderUser.id="58"
tinderUser.name="Raj"
tinderUser.isLoggedIn= false
//console.log(tinderUser);

const regularUser = {
    email : "raj@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vamja",
            lastname:"Raj"
        }
    }
}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.lastname);

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users =[
    {
        id:1,
        email:"r@gmail.com"
    }, 
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // find the propety 





