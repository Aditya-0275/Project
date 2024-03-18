// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const JSUser = {
    name : "Aditya", 
    "Full Name" : "Aditya Sharma",
    [mySym] : "myKey1",
    Age : 21,
    Location : "Jaipur",
    Email : "aditya@google.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Wednesday"]
}

// console.log(JSUser.Age)
// console.log(JSUser["Full Name"])
// console.log(typeof JSUser[mySym])

JSUser.Email = "aditya@gmail.com"
// Object.freeze(JSUser)
JSUser.Age = 33
// console.log(JSUser)

JSUser.greetings = function(){
    console.log("Hello, JS user!")
}
JSUser.greetingsTwo = function(){
    console.log(`Hello JS user!, ${this["Full Name"]}`)
}

console.log(JSUser.greetings())
console.log(JSUser.greetingsTwo());

