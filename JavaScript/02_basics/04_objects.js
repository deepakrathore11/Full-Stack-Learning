// const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


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


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// Object.assign(target{}, source= obj1, obj2);

// const obj3 = Object.assign({}, obj1, obj2); // this is use for concat the objects. 

const obj3 = {...obj1, ...obj2} // this is the best way.

console.log(obj3);