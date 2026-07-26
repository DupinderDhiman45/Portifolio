let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myDate1 = new Date(2026,0,23, 5, 3);
 // console.log(myDate1.toDateString());
console.log(myDate1.toLocaleString());

let myDate2 = new Date("2026-01-14")
console.log(myDate2.toLocaleString());
let myTimeStamp = Date.now() 
console.log(myTimeStamp);
console.log(myDate2.getTime());
console.log( Math.floor(Date.now()/1000));

let Date3 = new Date()
console.log(Date3);
console.log(Date3.getMonth());
console.log(Date3.getFullYear());
console.log(Date3.getDate());

console.log(Date3.toLocaleString('default',{weekday:'long', month:'long'}));