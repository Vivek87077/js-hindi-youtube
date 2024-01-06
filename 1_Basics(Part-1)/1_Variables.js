const accountId = 144553
let accountEmail = "Viveksharma@google.com"
var accountPassword = "aiml22015"
accountCity = "Gorakhpur"
/*
let,var used because its value can be updated but without var,let it also
treated as value can be updated.
In java script there are only one constant "const" and two variable "let,var"
generally var is not used in java script because in earlier days there were a 
problem in block scoping there were no controll on var .
To avoid this error nowdays we use 'let' keyword
*/



// accountId = 2 // not allowed(Because constant variable can not be updated)

accountEmail = "vanshagarwal@google.com"
accountPassword = "ece12250"
accountCity = "Jharkhand"
let accountState


console.log(accountId);

/*

Prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
