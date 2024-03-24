// high order array loops

// ["", "", ""]
// [{}, {}, {}]


// for of

// example

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
    
}

// example

const greetings = "hello world!";

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}



// maps

// example

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-',value);
}



// example

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// this syntax do not work for objects

// for (const [key, value] of myObject) {
//     console.log(key, ':-',value);
// }