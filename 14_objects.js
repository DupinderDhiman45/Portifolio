// CREATE AN OBJECT //
const objectMobile = {
    DeviceName: "Vivo T3X" ,
    Model : 2024 , 
    Ram :"6 GB" ,
    Storage : 128 ,
    hasFastCharging:  true,
    price: 13500 ,
};
// READ PROPERTIES //
const objectlaptop = {
    brand: "Dell",
    ram: "16GB",
    price: 65000
};

console.log(laptop.brand);
console.log(laptop.price);
console.log(laptop.processor);
// ADD PROPERTIES //
const car = {
    brand: "BMW",
    model: "X5"
};

const x = "brand";

console.log(car.brand);
console.log(car["brand"]);
console.log(car[x]);
console.log(car.model);
console.log(car["model"]);
// UPDATE PROPERTIES //
const laptop = {
    brand: "Dell",
    ram: "16GB"
};

laptop.processor = "i7 12th Gen";
laptop.storage = "512GB SSD";
laptop.price = 65000;

console.log(laptop);

// DELET PROPERTIES//
console.log(car.color); // undefined //
const student = {
    name: "Dupinder",
    age: 19,
    college: "UIET"
};

delete student.age;

console.log(student.age);
console.log(student);

// NESTED OBJECT //
const person = {
    name: "Dupinder",
    age: 19,
    laptop: {
        brand: "Dell",
        processor: "i7 12th Gen",
        ram: "16GB"
    }
};
const laptop = {
    brand: "Dell",
    price: 65000,

    showDetails: function(){
        console.log(`My laptop is ${this.brand} and price is ${this.price}`);
    }
};

laptop.showDetails();

const mobile = {
    brand: "Vivo",
    model: "T3X",
    price: 15000,

    info: function(){
        console.log(`This ${this.brand} ${this.model} costs ${this.price}`);
    }
};

mobile.info();
// OBJECT KEYS 
const phone = {
    brand: "Vivo",
    model: "T3X",
    price: 15000
};

const keys = Object.keys(phone);

console.log(keys[0]);
console.log(keys[2]);
console.log(keys.length);
// OBJECT VALUES 
const laptop = {
    brand: "Dell",
    ram: "16GB",
    price: 65000
};

const values = Object.values(laptop);

console.log(values[0]);
console.log(values[1]);
console.log(values.length);

// OBJECT ENTERIES //
const car = {
    brand: "BMW",
    model: "X5"
};

const result = Object.entries(car);

console.log(result[0]);
console.log(result[1]);

//HAS OWN PROPERTY //
const laptop = {
    brand: "Dell",
    ram: "16GB"
};

console.log(laptop.hasOwnProperty("brand"));
console.log(laptop.hasOwnProperty("price"));

// DESTRUCTING //
const student = {
    name: "Dupinder",
    age: 19
};

const { name, age } = student;

console.log(name);
console.log(age);

//  RENAMING OF KEYS DURING DESTRUCTURING//
const user = {
    username: "Dupinder"
};

const { username: userName } = user;

console.log(userName);

//NESTED OBJECT DESTRUCTURING //
const person = {
    name: "Dupinder",
    address: {
        city: "Ambala",
        state: "Haryana"
    }
};

const { address: { city, state } } = person;

console.log(city);
console.log(state);

// JSON //
//JSON.stringify()//
const student = {
    name: "Dupinder",
    age: 19
};

const jsonData = JSON.stringify(student);

console.log(jsonData);

//JSON.parse()//
const jsonData = '{"brand":"Dell","ram":"16GB"}';

const laptop = JSON.parse(jsonData);

console.log(laptop.brand);
console.log(laptop.ram);