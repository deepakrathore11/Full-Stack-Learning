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
// sayMyName()

// option 1
// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }
// addTwoNumbers() // output NaN not a number
// addTwoNumbers(2, 2) // output 4
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
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username){
    // if (username === undefined) {
    if (!username) { 
        console.log("Please enter a username");
        return 
    }
    return `${username} Just Logged In`
}
// console.log(loginUserMessage("deepu"));
console.log(loginUserMessage());