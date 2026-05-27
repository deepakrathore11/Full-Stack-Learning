// Immediately Invoked Function Expression (IIFE)
// An IIFE runs immediately after it is defined.
// Avoid Global Pollution: It keeps variables out of the global scope.

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

// IIFE ()();

(
    function DB(status) {
        console.log(`DB CONNECTED`);
        
    }
)(); // ;<-- important: terminate the iife otherwise another iife not work.
// IIFE Arrow Function

(
    (status) => {
        console.log(`${status}, DB TWO CONNECTED`);
        
    }
)("Hey");