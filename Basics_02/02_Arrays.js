const marvel_heroes = ["Ironman", "Thor", "Captain America"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heros)
// const allHeroes = marvel_heroes.concat(dc_heros)
// console.log(allHeroes);
// Spread -->
const allNewHeroes = [... marvel_heroes, ... dc_heros]
// console.log(allNewHeroes)

const anotherArr = [1 ,2 ,3, [4, 5, 6], 7, [7, 8, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr)

// console.log(Array.isArray('Aditya'))
// console.log(Array.from('Aditya'))
// console.log(Array.from({name : "Aditya"}))// We have to specify whether to convert the array of keys or Value, otherwise returns empty array.

let score1 = 1000
let score2 = 2000
let score3 = 3000

console.log(Array.of(score1, score2, score3))