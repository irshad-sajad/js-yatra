const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

// console.log(Math.PI); // 3.14...
// Math.PI = 5; // not possible
// console.log(Math.PI); // 3.14...

const chai = {
    name: 'nun chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}