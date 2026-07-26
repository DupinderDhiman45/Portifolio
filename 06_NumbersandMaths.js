const score = 480

const balance = new Number(100)
console.log(balance) ;
console.log(balance.toString().length);
console.log(balance.toFixed(1));
const otherNumber = 23.456789 
console.log(otherNumber.toPrecision(3));
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));
console.log(Number.MAX_SAFE_INTEGER);
console.log("Hello" / 2);
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.5));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));
console.log(Number.parseInt("123"));
console.log(Number.parseInt("123px"));
console.log(Number.parseFloat("12.56"));
const balance1 = new Number(100);

console.log(balance1.valueOf());
const num1 = 12345;

console.log(num1.toExponential());
console.log(num1.toExponential(2));













// Math Object

console.log(Math) ;
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,6,7));
console.log(Math.max(4,9,6,7));
console.log(Math.random());  // 0 to 1 values randomly
console.log(Math.random()*10);
console.log(Math.random()*10  + 1);

const min= 10
const max = 20 
console.log(Math.random() * (max - min + 1)+ min);
console.log( Math.floor(Math.random() * (max - min + 1) )+ min);