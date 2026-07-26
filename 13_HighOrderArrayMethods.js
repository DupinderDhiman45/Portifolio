let  numbers = [5,8,12,15,20];
console.log( numbers.filter(( num)=>{return num>10;})  );

let num1= [2,4,6,8];
let result1 = num1.map( (num)=>{ return num*num ;}) ;
console.log(result1);

let num2= [10,20,30,40];
let result2= num2.reduce((sum,num)=>{ return sum+num ;},0);
console.log(result2);

let fruits = [ "apple","banana","mango"];
let result = fruits.map((fruit)=>{return fruit.toUpperCase ;});
console.log(result);

let students = [
    {name:"A", marks:45},
    {name:"B", marks:75},
    {name:"C", marks:90},
    {name:"D", marks:30}
];
console.log( students.filter(( student)=>{return student.marks>=50;})
  );
  let result3 = students.map( (name)=>{ return student.name ;}) ;
console.log(result1);

let colors = ["Red","Blue","Green"];
colors.forEach((color)=>{ console.log("My favorite color is",color);});

let num4 = [5,10,15,20];
num4.forEach((num )=>{ console.log(num*3);});

let names = ["Rahul", "Aman", "Priya"];
names.forEach((name)=>{ console.log("Hello",name);});
//  ALL THE BELOW THREE TYPES CONTAINING ERROR OF USING CONSOLE.LOG INSTEAD OF RETURN //
let num5 = [11, 17, 20, 25, 30];
num5.find((num)=>{ console.log(num%2===0);});

let ages = [12, 15, 18, 20, 25];
ages.find((age)=>{ console.log(age>=18);});

let fruits1 = ["Apple", "Banana", "Mango", "Orange"];
fruits1.find((fruit)=>{ console.log(startsWith("M"));});

let num6 = [2, 4, 6, 9];
num6.some((num=>{console.log(num%2!=0);}));

let marks1 = [35, 40, 28, 50];
marks1.some((mark)=>{console.log(mark<=33);});

let names1 = ["Rahul", "Aman", "Priya"];
names1.some((name)=>{console.log(name.length>5);});

let num6 = [2, 4, 6, 8];
num6.every((num)=> {console.log(num%2===0);});

let ages1 = [20, 25, 30, 18];
ages1.every((age)=>{ console.log(age>=18);});



