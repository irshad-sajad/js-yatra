// arrow functions

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    // this keyword => used to access variables in this scope
    // this keyword => refers to the current context.
    // this keyword => works only for the objects, not in functions.
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // {}


// example 

// this => not works for functions

// function chai(){
//     let username = "hitesh";
//     console.log(this.username); // undefined
// }

// chai();



// arrow function

// const chai = function(){
//     let username = "hitesh";
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh";
    console.log(this.username);
}

// chai();


// basic syntax => explicit return

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// another way => implicit return

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ( num1 + num2 );

// to return an object
const addTwo = (num1, num2) => ({username: "hitesh"});

console.log(addTwo(3,4));



// arrow function with loops

const myArray = [2,3,5,7,8];

myArray.forEach(() => {});
myArray.forEach(function() {});
