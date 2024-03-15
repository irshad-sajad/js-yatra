const marvel_heros = ["ironman", "spiderman", "antman"];
const dc_heros = ["superman", "batman", "aquaman"];

// Push

// marvel_heros.push(dc_heros); // dc_heros will be added at index 3 as an array

// console.log(marvel_heros); // ['ironman','spiderman','antman',[ 'superman', 'batman', 'aquaman' ]]
// console.log(marvel_heros[3][1]); // batman


// Concat

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // [ 'ironman', 'spiderman', 'antman', 'superman', 'batman', 'aquaman' ]


// Spread 

const all_new_heros = [...marvel_heros, ...dc_heros]; // preferred

console.log(all_new_heros); // [ 'ironman', 'spiderman', 'antman', 'superman', 'batman', 'aquaman' ]


// Flat

const mix_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const new_mix_arr = mix_arr.flat(Infinity);
console.log(new_mix_arr); //[ 1,2,3,4,5,6,7,6,7,4,5 ]



console.log(Array.isArray("Junaid")); // false

// creates an array from an iterable object.
console.log(Array.from("Junaid")); // [ 'J', 'u', 'n', 'a', 'i', 'd' ]
console.log(Array.from({name: "Junaid"})); //creates an empty array [] - interesting



let score1 = 100;
let score2 = 200;
let score3 = 300;

// returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]