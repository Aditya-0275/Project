const tinderUser = new Object() // Singleton Object

tinderUser.ID = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    fullname : {
        userFullname : {
            firstname : "Aditya",
            lastname : "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users =[
    {
        id : 1,
        Email : '1@google.com'
    },
    {
        id : 2,
        Email : "2@gmail.com"
    }
]

// console.log(users[1].Email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// Destructuring of Objects.

const course = {
    coursename : "JS Basics",
    price : "999",
    courseInstructor : "Aditya"
}

// course.courseInstructor
const {courseInstructor : instructor} = course
console.log(instructor)

/*
json data ::
{
   " Name" : "Aditya",
    "CourseName" : "JS in Hindi",
    "price" : "free"
}
*/

