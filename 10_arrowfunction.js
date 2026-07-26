const user1 = {
    username: "hitesh", price: 999 ,
    welcomeMessage: function(){
        console.log(this);
    }
}
//user1.welcomeMessage();

const user2 = {
    username:"hitesh",
    greet: function(){
        console.log(this.username);
    }
}
//user2.greet();

const user3={
    username:"hitesh" , 
    greet: function(){
        console.log("hello",this.username);
    }
}
//user3.greet();

function hello(){
    console.log(this);
}
//hello();

"use strict"
function hello(){
   console.log(this);
}
//hello();

// ARROW FUNCTION //
const add = (a,b)=>a+b;
console.log(add(4,5));
const square=num=>num*num;
console.log(square(5));
 const hello=()=>console.log("Hello");
hello();

//IMMEDIATELY INVOKED FUNCTION EXPRESSION 
(function(){
    let secret=123;

    console.log(secret);
})();
(()=>{
    console.log("Arrow IIFE");
})();
console.log(a);

var a=10;
console.log(a);

let a=10;


