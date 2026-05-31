// if 
// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log("Logged IN");
    
// }

// ===, !== it check the types also 
// if (2 === "2") {
//     console.log("executed");
    
// }

// if (2 !== "2") {
//     console.log("executed");
    
// }

// const temprature = 41
// if (temprature < 50) {
//     console.log("temprature is less than 50");
    
// }
// else{
//     console.log("temprature is greater than 50")
// }

// const score = 99
// if (score> 100) {
//     const power = "fly"
//     console.log(`User Power ${power}`);
    
// }


// short hand notation, implicit scope but not good practice
// const balance = 1000
// // if (balance> 500) console.log("test"),console.log("test2");
// if (balance<500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }


const userLoggedIn = true
const debitCrd = true
const loggedInFromGoogle = false
const loffedInFromEmail = true
if (userLoggedIn && debitCrd && 2==2) {
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loffedInFromEmail){
    console.log("User logged in");
    
}