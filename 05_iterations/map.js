// map => callback function

// returns but we need to either return explicitly or the operation is performed
// everything will be returned

// example

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num + 10 })


/************************* chaining concept ********************* */

// chaining concept
// 2 to 3 callback methods can be used simultaneosly

// example 

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums); // [ 41, 51,  61, 71, 81, 91, 101 ]


// for each

const nums = [];

newNums.forEach( (num) => {
    if(num >= 40){
        nums.push(num);
    }
})

// console.log(nums); // [ 41, 51,  61, 71, 81, 91, 101 ]