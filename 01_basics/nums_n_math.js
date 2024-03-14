const score = 400; //automatically detects it as a number
// console.log(score); //400

const balance = new Number(100); //define a number explicitly
// console.log(balance); //[Number: 100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(1)); //100.0 

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000
// console.log(hundreds.toLocaleString('en-US')); //1,000,000



// +++++++++++++ Maths +++++++++++++++++++++++++++++++

// console.log(Math); //is an object
// console.log(Math.abs(-4)); //4 => -ve to +ve
// console.log(Math.round(4.6)); //5 => roundoff
// console.log(Math.ceil(4.2)); //5 => roundoff to upper value
// console.log(Math.floor(4.9)); //4 => roundoff to lower value
// console.log(Math.min(4, 3, 6, 8)); //3
// console.log(Math.max(4, 3, 6, 8)); //8

console.log(Math.random()); //value lies between 0 & 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //value between 1 & 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);