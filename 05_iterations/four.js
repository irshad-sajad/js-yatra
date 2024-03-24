// for in

// example

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// example

const programming = ["js","rb","py","java","cpp"];

for (const key in programming) {
    //console.log(key); // 0 1 2 3 4
    //console.log(programming[key]);
}


// example

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
    console.log(key); // will not run
}