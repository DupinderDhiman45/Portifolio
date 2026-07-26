// =====================================
// JAVASCRIPT LOOPS PRACTICE
// Day 7 - Control Flow & Loops
// =====================================



// =====================================
// FOR LOOP
// =====================================

// Example 1 - Print 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("----------------");


// Example 2 - Print 5 to 1

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

console.log("----------------");


// Example 3 - Even Numbers

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("----------------");


// Example 4 - Table of 5

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

console.log("----------------");


// Example 5 - Squares

for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

console.log("----------------");


// Example 6 - i + i

for (let i = 1; i <= 5; i++) {
    console.log(i + i);
}

console.log("----------------");


// Example 7 - i + 5

for (let i = 1; i <= 5; i++) {
    console.log(i + 5);
}

console.log("----------------");


// =====================================
// BREAK
// =====================================

for (let i = 1; i <= 10; i++) {

    if (i === 4) {
        break;
    }

    console.log(i);
}

console.log("----------------");


// =====================================
// CONTINUE
// =====================================

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

console.log("----------------");


// =====================================
// WHILE LOOP
// =====================================

// Example 1

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}

console.log("----------------");


// Example 2

let b = 5;

while (b >= 1) {
    console.log(b);
    b--;
}

console.log("----------------");


// Example 3 - Even Numbers

let c = 2;

while (c <= 10) {
    console.log(c);
    c += 2;
}

console.log("----------------");


// Example 4 - Table of 7

let d = 1;

while (d <= 10) {
    console.log(7 * d);
    d++;
}

console.log("----------------");


// =====================================
// DO WHILE
// =====================================

// Example 1

let e = 1;

do {
    console.log(e);
    e++;
} while (e <= 5);

console.log("----------------");


// Example 2

let f = 10;

do {
    console.log(f);
} while (f <= 5);

console.log("----------------");


// =====================================
// WHILE vs DO WHILE
// =====================================

// WHILE

let g = 10;

while (g <= 5) {
    console.log(g);
}

console.log("----------------");


// DO WHILE

let h = 10;

do {
    console.log(h);
} while (h <= 5);

console.log("----------------");