// Array declaration
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraaj"]
console.log(myArr[0]);
console.log(myHeros[1]);

// Array declaration with object 
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[2]);
console.log(typeof myArr2);


// Array methods
myArr.push(6) // to add a element at last
myArr.pop() // remove the last element
myArr.unshift(9) // push at first
myArr.shift() // remove the first element
console.log(myArr);
console.log(myArr.includes(9)); // give the boolean value of your question.
console.log(myArr.indexOf(5));
const newArr = myArr.join() // convert all the array elements into a string.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


// slice, splice
console.log("A ", myArr);

const myNewArr1 = myArr.slice(1, 3) // This not manipulate the array.
console.log(myNewArr1);

console.log("B ", myArr);

const myNewArr2 = myArr.splice(1, 3) // This manipulate the array.
console.log(myNewArr2);

console.log("C ", myArr);