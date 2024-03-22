// Immediately Invoked Function Expressions (IIFE)

// syntax

// ()() => wrap function inside first paranthesis.
// () => first is function definition
// () => second paranthesis is execution


// example 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);

})(); // this iife has been invoked but it does not know where to actually stop the context, 
// so in such situation, In JS, a semi colon is required to end it.


// ()()


// example

( () => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO`);
} )();


// passing a parameter

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



// basic definition => function will be executed immediately

// interview perspective answer

// many times there is a problem due to the pollution of global scope,
// so to remove that pollution of the variables of global scope or whatever 
// declaration is there, we can use IIFE.