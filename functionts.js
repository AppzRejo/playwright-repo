"use strict";
function great() {
    console.log("Hello world");
}
great();
function add(a, b) {
    console.log(a + b);
}
add(5, 3);
function subtraction(x, y) {
    return x - y;
}
console.log(subtraction(8, 3));
function error(message) {
    throw new Error(message);
}
error("Something went wrong");
