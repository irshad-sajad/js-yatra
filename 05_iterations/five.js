// for each

// callback function (fn with no name) is passed to for each

// example

const coding = ["js","rb","py","java","cpp"];

// coding.forEach( function (val){
//     console.log(val);
// })


// coding.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })



// example

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
