let score = "33abc"
console.log(typeof score)
let valueInNumber = Number(score) // Converts null to zero and undefined to NaN.
console.log(typeof valueInNumber)
console.log(valueInNumber) // NaN : not a number.

let isLoggedIn = 1
// Empty string in is looged in will be converted to false 
// and any string value converts to true.
// 1 => true, 0 => false.
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
