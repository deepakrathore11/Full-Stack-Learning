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