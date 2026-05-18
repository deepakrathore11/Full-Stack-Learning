// Primitive data types in JavaScript

// 1. Number( integer and floating point numbers)
let score = 100
console.log(typeof score);
// 2. String
let name = "Deepak"
console.log(typeof name);
// 3. Boolean
let isLoggedIn = true
console.log(typeof isLoggedIn);
// 4. Undefined
const value = undefined
console.log(typeof value);
// 5. Null
const space = null
console.log(typeof space)
// 6. Symbol
const id = Symbol("123")
const anotherID = Symbol("123")
console.log(typeof id);
console.log(id === anotherID);

// 7. BigInt
let score2 = 1893484n
console.log(typeof score2);




// Non-primitive data type & Reference type
// 1. Object

let obj = {
    name: "deepak",
    age: 22,

}
console.log(typeof obj);
// 2. Array
const heros = [ "Shaktiman", "naagraj", "krish"]
console.log(typeof heros); // array datatype is also object
// 3. Function
const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof myFunction);
console.log(myFunction());

// https://262.ecma-international.org/5.1/#sec-11.4.3



