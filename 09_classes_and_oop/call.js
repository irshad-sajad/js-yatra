// Call

// used to hold the reference.
// passes the current execution to another function.

// example
function setUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);


// console.log(new createUser("chai", "chai@fb.com", "123").username);