function AddTwoNums(Num1, Num2){ // Inputs in this line are called parameters.
    let result1 = (Num1 + Num2);
    return result1;
    console.log("Aditya") // This line will not be executed as we have returned.
}

const result = AddTwoNums(3,4) // Inputs here are called Arguments.

// console.log(result) // check 

function loginUserMsg(username = "Aditya"){
    if(!username){
        console.log("Please enter your name")
        return
    }
    return `${username} just LoggedIn.`
}

// console.log(loginUserMsg())

function calculateCartPrice(val1, val2, ...num1){ // Rest operator.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 400))

const user = {
    username : "Aditya",
    price : 1999
}
function handleObj(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}.`)
}

// handleObj(user)
// hand


const mynewArray = [200, 300, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArray)) // Can pass the array directly in argument.