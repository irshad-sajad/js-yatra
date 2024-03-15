// Array

// ways of declaring an array
const arr = [0,1,2,3,4,5];
const heros = ["batman", "superman"];

const arr2 = new Array(1,2,3,4);
// console.log(arr[0]); //0 => 0-based indexing


// Array Methods

// arr.push(6); //inserts element at end
// arr.pop(); //removes element from end

// arr.unshift(9); //inserts element at start
// arr.shift(); //removes element from start

// console.log(arr.includes(9)); //false
// console.log(arr.indexOf(3)); //3 

// const newArr = arr.join(); //converts arr to string

// console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5 => string



// slice, splice

console.log("A", arr); //A [ 0, 1, 2, 3, 4, 5 ]

// slice
const myNewArr = arr.slice(1,3); //1 => included, 3 => excluded

console.log(myNewArr); //[ 1, 2 ]
console.log("B", arr); //B [ 0, 1, 2, 3, 4, 5 ]


// splice => changes the original array
const myNewArr2 = arr.splice(1,3); //both 1,3 included

console.log("C", arr); //C [ 0, 4, 5 ]
console.log(myNewArr2); //[ 1, 2, 3 ]