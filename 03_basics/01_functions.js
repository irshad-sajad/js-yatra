// functions
// block of code in a package, we can take a copy of that as many times as we want, wherever we want.

// syntax

// function definition

function sayMyname(){
    console.log("I");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
}

// function call

// sayMyname();        // reference and execute



// function to add two numbers

// function addTwoNumbers(number1, number2){ // passed parameters
    
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4); // passed arguments


function addTwoNumbers(number1, number2){ // passed parameters
    
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);



// example

function loginUserMessage(username){
    if(!username){
        // console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // undefined will be passed as an argument


// another way

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage()); // sam just logged in
// console.log(loginUserMessage("hitesh")); // hitesh just logged in => overrides the username



/**************************************************************************************** */

// when we don't know how many arguments are passed

// rest operator (...variableName)

function calculateCartPrice(val1, val2, ...num1){ 
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // [ 500, 2000 ]



// example - objects with function

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Username is sam and price is 499
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 499
});



// example - arrays with function

const myNewArray = [200, 400, 100, 500];

function returnSecondValue(getArray){
    
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 500]));