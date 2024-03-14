// Dates
// all the dates are calculated in milli seconds from Jan 1, 1970

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString()); 
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //milli seconds from Jan 1, 1970 till now
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate); //current date
console.log(newDate.getMonth() + 1); //current month
console.log(newDate.getDay()); //day of the week (Monday=1...)

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
});