// class-based syntax

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}abc`;
    }

    set password(value){
        this._password = value;
    }
}

const chai = new User("chai@cafe.com", "abc321");

console.log(chai.email); // CHAI@CAFE.COM
console.log(chai.password); // abc321abc