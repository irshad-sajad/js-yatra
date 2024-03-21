// two ways of declaring objects: 1. object literal, 2. constructor

// singleton => when objects are made from constructor
// Object.create

// object literals

const mySym = Symbol("key1");

// declaration
const user = {
    name: "Irshad",
    "full name": "Irshad Sajad",
    [mySym]: "mykey1", // [] are used, to refer to symbol.
    age: 22,
    location: "Bangaluru",
    email: "bhattjunaid@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// access objects
// console.log(user.email); // not preferred
// console.log(user["email"]); // preferred way
// console.log(user["full name"]);
// console.log(user[mySym]); // important from interview perspective

// manipulate objects
user.email = "irshad@gmail.com";

// freeze the object 
// Object.freeze(user); // object user cannot be changed now.

// as object is freezed, object cannot be manipulated.
user.email = "irshad@google.com";
// console.log(user);


// function will be treated as variables.
user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());