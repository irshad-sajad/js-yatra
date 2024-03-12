// JavaScript is dynamically typed language, 
// which means that the data type of a variable is determined at runtime.

// Types of data:
// how data is stored in memory and how it's accessed, on that basis, 
// data is categorized into two types: Primitive & Non-Primitive (reference type)

// primitives (call by value): copy of the reference is passed.
// 7 types:
// string, number, boolean, null(empty), undefined, symbol, bigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123') //symbol

console.log(id === anotherId); //false => both variables are unique

// const bigNumber = 3456543576654356754n //dataType = bigInt



// non-primitives (reference): reference is allocated directly.
// types: arrays, objects, functions 

const heros = ["shaktiman", "ironman", "spiderman"]; //array

let myObj = { //object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ //function
    console.log("Hello world");
}


//how to know datatype of any value (use typeof)
console.log(typeof anotherId); //type = symbol

//return type of primitives:
//Boolean => boolean
//Null => object
//Number => number
//String => string
//Symbol => symbol
//BigInt => bigInt
//Undefined => undefined


//return type of non-primitives:
//Arrays => object
//Object => object
//Function => function (return type specially "object function")

console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function(object)


// https://262.ecma-international.org/5.1/#sec-11.4.3




/*****************************************************************/
//Types of Memory: 2 types
//Stack (primitives) => whenever stack memory is used, we get the copy of the variable declared.
//Heap (non-primitives) => when heap memory is used, we get the reference of original value.

let myName = "Irshad";

let myAnotherName = myName; //copy of myName (reference) is passed
myAnotherName = "Junaid";

console.log(myName); //Irshad
console.log(myAnotherName); //Junaid

let userOne = {
    email: "user@google.com",
    upi: "user@oksbi",
}

let userTwo = userOne; //actual reference is passed
userTwo.email = "irshad@google.com";

console.log(userOne.email); //irshad@google.com
console.log(userTwo.email); //irshad@google.com