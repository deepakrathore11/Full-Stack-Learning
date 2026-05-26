let a = 100
const b = 200
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 
    console.log("Inner Value of A : ",a);
    console.log("Inner Value of B : ",b);
    console.log("Inner Value of B : ",c);
    
} // Note:- {} this is block scope and outside this is called a global scope
console.log("Out Value of A: ",a);
console.log("Out Value of B: ",b);
console.log("Out Value of C: ",c);


function one(){
    const username = "deepak"

    function two(){
        const website = "youtube"
        console.log(username);
    }
        // console.log(website);

        two()
}

one()

if (true) {
    const username = "deepak"
    if (true) {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++ interesting ++++++++++++++++

console.log(addOne(5))
function addOne (num){
    return num + 1
}
// console.log(addTwo(5)) // here we can not done same because its declared in variable
const addTwo = function(num){ // also here is addTwo is called expression of fuction.
    return num + 2
}
console.log(addTwo(5))