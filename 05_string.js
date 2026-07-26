const name= "dupinder"
const age = "20"

console.log(`My name is ${name} and my age is ${age}`);

// another type of righting string 
 const gameName = new String('pubg') 

 console.log (gameName[0]);
 console.log(gameName.length);
 console.log(gameName.__proto__);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('g'));
 const name1 ="dupinder" 
 console.log(name1.substring(0,3));
 console.log(name1.slice(-4));
 const name2 = "      dupinder    "
 console.log(name2.trim());
 const url =" https://dupinder.com/dupinder%20dhiman "
 console.log(url.replace('%20','-'));
 console.log(url.includes('dupinder'));
 const fruits = "apple,banana,mango";

console.log(fruits.split(","));
const email = "dupinder@gmail.com";

console.log(email.startsWith("du"));
const file = "photo.png";

console.log(file.endsWith(".png"));
console.log("Hi ".repeat(3));
const first = "Hello";
const second = " World";

console.log(first.concat(second));