/* Conversions */
let score = "33abc"
// console.log(typeof score)
let valueInNumber = Number(score) // Converts null to zero and undefined to NaN.
// console.log(typeof valueInNumber)
// console.log(valueInNumber) // NaN : not a number.

let isLoggedIn = 1
// Empty string in is looged in will be converted to false 
// and any string value converts to true.
// 1 => true, 0 => false.
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)

let someNumber = 33
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber)

/* Operations */
let value = 3
let negVal = -value
// console.log(negVal)

let str1 = "Hello Mr."
let str2 = "Aditya"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

console.log(+true)
console.log(+"")
// Above two conversions should not be performed.
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gamecounter = 100
gamecounter ++
++ gamecounter
console.log(gamecounter);