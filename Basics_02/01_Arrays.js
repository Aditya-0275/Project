// Arrays

const myArr = [1,2,3,4,5]
// console.log(myArr[0])
const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr2[0])

// Arrays Methods
// myArr.push(45)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(99) // Not an optimised operation.
// myArr.shift()
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))
// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

// slice and splice.
const myn1 = myArr.slice(1,3)
console.log("A ", myArr);
console.log(myn1)

const myn2 = myArr.splice(1,3)
console.log("B ", myArr);
console.log(myn2)
