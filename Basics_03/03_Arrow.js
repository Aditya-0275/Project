const user = {
    username : "Aditya",
    price : 199,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website!`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'Amit'
// user.welcomeMessage()

// console.log(this) // Here current context is empty, empty object.
// this talks about current context.

// function one(){
//     let username = "Aditya"
//     console.log(this.username)
// }

// const one = function () {
//     let username = "Aditya"
//     console.log(this.username)
// }

// Arrow Function
const one = () => {
    let username = "Aditya"
    console.log(this)
}

// one()

// Basic Use, Explicit Return.
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// Implicit Return.
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => ({username : "Aditya"})
// console.log(addTwo(3,4))

// const myArr = [2,5,3,7,8]
// myArr.forEach()
