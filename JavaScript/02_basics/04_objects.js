// const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "deepak@gmail.com",
    fullname: {
        userFullName : {
            firstname: "deepak",
            lastname: "rathore"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname); // this is how you can access the object that is nested in object.

// object concat
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"} 
// Object.assign(target{}, source= obj1, obj2); 
const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj2} // but this is the best way.
console.log(obj3);

// Array of Objects
const users =[
    {
        id: 1,
        email: "deepakrathor1@google.com"

    },
    {
        id: 2,
        email: "deepakrathor2@google.com"

    },
    {
        id: 3,
        email: "deepakrathor3@google.com"

    }


]

console.log(users[0].id);
console.log(users[0].email);

// Object methods imp & useful.
console.log(tinderUser);
console.log(Object.keys(tinderUser),`These are the keys`);
console.log(Object.values(tinderUser), `These are the values`);
console.log(Object.entries(tinderUser), `These are the entries`);
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // True because it has.