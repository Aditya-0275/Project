let a = 10
const b = 20
var c = 30 // Not used much as its value can be accessed from outside of the scope also which causes problems.

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Aditya"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

one()

const addTwo = function(num){
    return num +2
}

addTwo(5)