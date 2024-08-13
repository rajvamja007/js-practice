function myInfo(){
    console.log("R");
    console.log("A");
    console.log("J");

}
// myInfo();  // Print the function values

function addNumber(number1,number2){
    console.log(number1+number2);
}
// addNumber(2,7); // enter number but not specify to value is number
// addNumber(2,"7"); // enter number and string value but not specify to value is number then convert to string value
// addNumber(2,"a"); // enter number and string but not specify to value is number then convert to string value
// addNumber(2,null); 

function addTwoNumber(number1,number2){
    //let result=number1+number2
    //return result
    return number1+number2
}

const result = addTwoNumber(3, 4)
//console.log("Result :",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a value.");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Raj"))
console.log(loginUserMessage()) // value is undefined 
