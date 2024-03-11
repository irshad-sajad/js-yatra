//Comparing same dataTypes
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//Comparing different dataTypes
// console.log("2" > 1); //true
// console.log("02" > 1); //true


//Avoid such kind of comparisons
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false


//strict equality(===) => checks both value & dataType
//if both are equal = true, otherwise = false
console.log("2" === 2); //false