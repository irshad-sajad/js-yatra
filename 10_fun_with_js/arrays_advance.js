// advance discussion on arrays

const myArr = []
// %DebugPrint(myArr);

// continuous (Packed), Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE-ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])

// if hole is there, these checks are needed:
// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

/********************************************** */

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]); // return 3

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED


// not better for optimization
const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1'; // HOLEY_ELEMENTS
arrFour[1] = '2'; // HOLEY_ELEMENTS
arrFour[2] = '3'; // HOLEY_ELEMENTS

// better for optimization
const arrFive = [];
arrFive.push('1'); // PACKED_ELEMENTS
arrFive.push('2'); // PACKED_ELEMENTS
arrFive.push('3'); // PACKED_ELEMENTS


const arrSix = [1,2,3,4,5];
arrSix.push(NaN); // PACKED_DOUBLE
arrSix.push(Infinity); // PACKED_DOUBLE

/*
Summary:
There are two types of arrays: holey arrays and continuous arrays. 
These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

1. **Holey Array**: A holey array is an array that contains missing or empty elements. 
For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

2. **Continuous Array**: A continuous array is an array that does not contain missing or empty elements. 
For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.

*/