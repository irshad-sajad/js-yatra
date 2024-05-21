// static property

// cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
// example

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

console.log(User.createId()); // 123

const irshad = new User("irshad");
// console.log(irshad.createId()); // error


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

iphone.logMe(); // Username: iphone
console.log(iphone.createId()); // error