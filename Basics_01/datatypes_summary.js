//  Primitive datatypes :: 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
//  Reference Datatypes :: Array, Objects, Functions

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(anotherId == id);

const Bigno = 36482791983919883n

// console.log(typeof Bigno);

const Heroes = ["Ironman", "Cap America", "Hulk"]
let myObj = {
    Name :"Aditya",
    Age : 21
}

const myFunc = function(){
    console.log("Hello!");
}

/* Memories */

//  Stack(Primitive) and Heap(Non-Primitive)

let userone = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

usertwo =userone
usertwo.email = "aditya@google.com" // values in both userone and two will change. Memory allocated in heap.