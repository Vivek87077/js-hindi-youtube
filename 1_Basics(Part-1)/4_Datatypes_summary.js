// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id  = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34576739789239048n

// Reference (Non-Primitive)

// types : Array, Objects, Functions,

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name:"Vivek",
//     age: 19,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber)


// Link to know further more about typeof:---
//  https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++ Memory +++++++++++++

// Stack (Primitive) :--> In stack memory we get copy of declared variable
// Heap (Non-Primitive) :-> In heap memory we get reference of original value




// ******** Example of stack memory *********
// let myYoutubename = "VivekSharmaPCM"
// let anothername = myYoutubename
// anothername = "VivekVersatile"

// console.log(myYoutubename);
// console.log(anothername);



// ******** Example of heap memory ********
// let userOne = {
//     email: "User@google.com",
//     upi: "User@ybl"
// }
// let userTwo = userOne

// userTwo.email = "Vivek@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);
