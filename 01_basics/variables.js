//a variable is a container that stores a value.

//var, let, const

//way of declaring constants and variables
const accountId = 101; //cannot be changed
let accountEmail = "irshad@gmail.com";
var accountPassword = "123789456"; //var keyword is usually not allowed to use
accountCity = "Srinagar";
let accountState;

//accountId = 2; //not allowed as this variable is declared with const keyword
console.log(accountId); //will give an error

accountEmail = "junaid@gmail.com";
accountPassword = "123456789";
accountCity = "Bangaluru";

console.log(accountId);

// prefer not to use var 
// because of issue in block scope and functional scope

{
    // this is a block scope
}

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/*
notes:
- var vs let vs const
- var is globally scoped while let & const are block scoped.
- var can be updated & re-declared within it's scope.
- let can be updated but not re-declared.
- const can neither be updated nor be re-declared.
- var variables are initialized with undefined whereas let & const variables are not initialized.
- const must be initialized during declaration unlike let & var.
*/