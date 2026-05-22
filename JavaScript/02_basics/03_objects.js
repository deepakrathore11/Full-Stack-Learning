// singleton

//object literals
const mySym = Symbol("key1")
const jsUser = {
    name: "Deepak",
    "full name": "Deepak Rathore",
    [mySym]: "This is key1", // thats how symbol declare here. in object
    age: 21,
    location: "Kota",
    email: "deepakrathore@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// update object and freeze object
jsUser.email = "deepak@google.com"
Object.freeze(jsUser) // freeze value
console.log(jsUser.email);
jsUser.email = "deepak@microsoft.com"
console.log(jsUser.email);

// Function inside object
jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // just used string interpolation here.
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());