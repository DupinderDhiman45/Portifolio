// PRIMITIVE DATATYPES

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const bigNumber = BigInt("123456789012345678901234567890");

// Refernce type (Non primitive )

// Arrays , Objects ,Functions 

const heros = ["shaktiman", "naagraj", "doga"]; // array [""]
const myObj = {
    name: "hitesh",
    age: 22,
};// object {key:value}

const myfunction = function() {
    console.log("hello world");
} // function

console.log(typeof  bigNumber);