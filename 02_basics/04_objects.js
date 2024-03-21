// how objects can be declared using singleton, or constructor

const tinderUser = {}; // non-singleton object
// const tinderUser = new Object(); // singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammmy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "irshad",
            lastname: "sajad"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); // read note

// note: if in the above case, fullname does not exists, 
// put ? after fullname, this provides a kind of protection.
// when response comes from api's, we need to use this syntax



// merge objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// using assign operator
// {} => target,
// obj1, obj2,... => source

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// using spread operator

const obj3 = {...obj1, ...obj2};
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// when values comes from a database
const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 1,
        email: "some@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser); // { id: '123abc', name: 'Sammmy', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammmy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammmy' ], [ 'isLoggedIn', false ] ]



// check property exists or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLoggedOut')); // false



/********************************************************************************************** */

// object de-structuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor;

const {courseInstructor} = course;
console.log(courseInstructor); // hitesh

// can also rename the property name 
const {courseInstructor: instructor} = course;
console.log(instructor); // hitesh



// related to react
const navbar = ({company}) => {

};

navbar(company = "barclays");


/*************************************** api's overview *************************************** */

// api's 
// when you want to get work done by someone.
// e.g., restaurant menu card

// getting some values from backend, how we write those values.
// early those values came in the xml format, which was complex.
// and now those values mostly comes to us in the json format.


// json
// object only but without any name

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// sometimes we get api's in array format

[
    {},
    {},
    {}
]

// to understand api's, use json fromatter tool