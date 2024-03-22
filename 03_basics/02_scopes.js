// scopes - local and global scope

// var c = 300;
let a = 300; 

if(true){ // curly braces is the scope
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER: ", a);
}

// console.log(a); // 300
// console.log(b); // error
// console.log(c); // 30



// nested scope

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // error

    two();
}

// one();


if(true){
    const username = "hitesh";
    if(username === "hitesh"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



/*************************** interesting ************************ */

// ways of writing a function

// one way

function addOne(num){
    return num + 1;
}

addOne(5);


// another way

const addTwo = function(num){
    return num + 2;
}

addTwo(5);