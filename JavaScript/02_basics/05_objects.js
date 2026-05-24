// Object de-structure
const course = {
    coursename: "js learning",
    price: "999",
    courseInstructor: "Deepak"
}
// course.courseInstructor
// const {courseInstructor} = course
const {courseInstructor: instructor} = course // here we can rename this also.
console.log(instructor);

// de-structure in react.
// const navbar = ({company}) => {  }
// navbar(company = "Deepak") 

[
    {},
    {},
    {}
]