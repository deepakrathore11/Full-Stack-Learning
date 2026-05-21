const name = "Deepak"
const repoCount = 50

// console.log(name + repoCount + " Value"); not use this 

// String Interpolation Use insted 

console.log(`Hello my name is ${name} and ny repo count is ${repoCount}`);



// strings properties


const gameName = new String("Deepakk-hh")

console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf("D"));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    deepak    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.deepak.com/deepak%20rathore"



console.log(url.replace("%20", "-"));


console.log(url.includes("deepak"));
console.log(url.includes("deepakji")); 

console.log(gameName.split("-"));