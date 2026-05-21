const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // add element on existing array.
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
{
    const marvel_heros = ["thor", "ironman", "spiderman"]
    const dc_heros = ["superman", "flash", "batman"]
    const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); 
} // Use block scope here by const.

// Spread is more use useful.
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // The spread operator (...), is a simple way to expand an iterable (like an array or object) into individual elements.

const another_array = [1,2,3, [4,5,6,], 7, [6,7], [4,5]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // used to take an array that has "nested" arrays (arrays inside arrays) and combine them into one single, flat array

console.log((Array.isArray([1,2,3]))); // True
console.log((Array.isArray("Deepak"))); // False
console.log((Array.from("Deepak"))); // From use For Converting anything into array, if failed to convert gives you [] empty array.
console.log((Array.from({name: "Deepak"}))) // Here it is failed to convert so it returns the [] array here.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2,score3)); //Return new array using these elements.