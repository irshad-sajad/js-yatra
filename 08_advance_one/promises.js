const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// Promise Chaining

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "irshad", password: "12345"});
        }else{
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})

// thennable (chaining of then's)
promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));



// async/await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "javascript", password: "54321"});
        } else{
            reject('ERROR: JS went wrong');
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();


/*********************************************************************************** */

// fetch api

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));
