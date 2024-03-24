// if-else

// example

const isUserloggedIn = true;
const temperature = 41;

if(temperature < 40){
    console.log("temperature is less than 40");
}else{
    console.log("temperature is greater than 40");
}

console.log("Execute"); // will always execute
// <, >, <=, >=, ==, !=, ===, !==




// example

// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // error => power has local scope




// example

// const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2"); // not preferred

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }




// example
// using logical AND (&&), OR (||)

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}