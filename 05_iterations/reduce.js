// reduce => callback function

// usage => shopping cart
// accumulator => initial value is 0

// example

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and current value: ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal); // 6


// using arrow function

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)

console.log(myTotal); // 6



// example

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay); // 22996