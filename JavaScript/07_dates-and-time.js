//Dates Example

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

// Example
// let myCreatedDate = new Date(2026, 5, 21,)
// let myCreatedDate = new Date(2026, 5, 21, 12, 30)
// let myCreatedDate = new Date("2026-05-21")
let myCreatedDate = new Date("05-21-2026")
console.log(myCreatedDate.toLocaleString());

// timestamp example
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// Example
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// Example
let anotherDate = `${newDate.getDay()} and the time`
console.log(anotherDate);


// Example -->
console.log(newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "Asia/Kolkata"
}));