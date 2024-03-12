//Strings => sequence/assembly of characters

const name = "irshad";
const repoCount = 10;

console.log(name + repoCount); //not a preferred way

//using backticks 
//string interpolation (make placeholders to inject variables directly)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //preferred way 

const gameName = new String('PubG');

console.log(gameName[0]); //P
console.log(gameName.__proto__); //{}

console.log(gameName.length); //4
console.log(gameName.toUpperCase()); //PUBG
console.log(gameName.charAt(3)); //G
console.log(gameName.indexOf('u')); //1

const newString = gameName.substring(0,3);
console.log(newString); //Pub

const anotherString = gameName.slice(-4,3); 
console.log(anotherString); //Pub

const newStringOne = "  irshad   ";
console.log(newStringOne); //  irshad
console.log(newStringOne.trim()); //irshad

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-')); //https://hitesh.com/hitesh-choudhary

console.log(url.includes('hitesh')); //true
console.log(url.includes('irshad')); //false

const game = new String('Clash-Of-Clans');
console.log(game.split('-')); //[ 'Clash', 'Of', 'Clans' ]