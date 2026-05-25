// console.log("D");
// console.log("E");
// console.log("E");
// console.log("P");
// console.log("A");
// console.log("K");

function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}
sayMyName()

// option 1
function addTwoNumbers(num1, num2) {
 console.log(num1 + num2);
}
// addTwoNumbers() // output NaN not a number
console.log(addTwoNumbers(2, 2)); // output 4
// addTwoNumbers(2, "2") // output 22
// addTwoNumbers(2, "a") // output 2a
// addTwoNumbers(2, null) // output 2

function addTwoNumbers(num1, num2) {
// option 2
//    let result = num1 + num2
//    return result
//    console.log("Hi"); // after the return everything is ignored, unreachable code.

//option 3 
   return num1 + num2
}
const result = addTwoNumbers(4, 4)
console.log("Result: ", result);

function loginUserMessage(username){
    // if (username === undefined) {
    if (!username) { 
        console.log("Please enter a username");
        return 
    }
    return `${username} Just Logged In`
}
console.log(loginUserMessage()); // if undefined it will show message on terminal.
console.log(loginUserMessage("deepu"));


function calculateCartPrice(... num1){  // (...) here is rest operator.
    return num1
}
console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "Deepak",
    price: 199,
}
function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handelObject(user)

handelObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 600, 800]
function returnSecondValue(anyArray) {
    return anyArray[1]
}
console.log(returnSecondValue(myNewArray));

function returnThirdValue(anyArray) {
    return anyArray[3]
}
console.log(returnThirdValue([200, 400, 600, 800]));