// Object literal

const user = {
    username: "irshad",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this); // this refers to current context
    }
}

// console.log(user.username); // irshad
// console.log(user.getUserDetails());
// console.log(this); // {} => empty object



// Constructor function

// this 'new' keyword is used to make a new context, and is called constructor function
// const promiseOne = new Promise()
// const date = new Date();


// use of this keyword
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // implicitly defined (default)
    return this; 
}

// new keyword creates a new instance everytime
const userOne = new User("irshad", 12, true)
const userTwo = new User("junaid", 13, false)
console.log(userOne.constructor);
// console.log(userTwo);