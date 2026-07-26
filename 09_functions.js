function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("I");
    
}
//sayMyName()

function addTwoNumber(number1 ,number2){
    console.log(number1+number2);
}
function addTwoNumber(number1 ,number2){
    let result = number1 + number2 
    return result 
}
addTwoNumber(2,"3")
const result = addTwoNumber(3,5)
//console.log("Result:" , result);

function loggedIn(username){
    return'${username} just logged in'
}
console.log(loggedIn("chut"));
//console.log(loggedIn());

function calculateCartPrice(...num1){
    return num1

}
function calculateCartPrice(val1,val2,...num1){
    return val1,val2,num1

}
//console.log(calculateCartPrice(200,400,500));
//console.log(calculateCartPrice(200,400,500,2000));


function handleObject(anyobject){
    console.log("Username is ${anyobject.username} and  price is ${anyobject.price}");
}
handleObject({
    username: "sam" ,
    price: 199
})