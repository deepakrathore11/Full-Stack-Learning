// while loop

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

// index is now 12 so we have to reset again the index to 0

index = 0
let myArray = ["flash", "batman", "superman"]
while (index < myArray.length) {
    console.log(`Hero is ${myArray[index]}`);
    index++
    
}

// do while

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

score = 100
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);