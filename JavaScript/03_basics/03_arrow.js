const user = {
    username: "deepak",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); // gloablly value  of (this) is empty object for node and for browser console its called window object

// function chai(){
//     let username = "deepak"
//     console.log(this);
    
// }
// chai()


// const chai = function(){
//     let username = "deepak"
//     console.log(this);
// }

// This is called arrow function
const chai = () => {  
    let username = "deepak"
    console.log(this); // here this is {} empty object.
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
    
// }

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3,4))
const anotherUser = ()  => ({username: "deepak"})
console.log(anotherUser());

const myArray = [2,3,4,5,6,7]
// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ({}))
// myArray.forEach(() => ())