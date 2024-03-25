// const promiseOne = new Promise(function(resolve, reject){
//     // Do anasync task.
//     // DB calls ,cryptograpgy, network.
//     setTimeout(() => {
//         console.log("Async task is complete.");
//         resolve()
//     }, 1000);

// })
// promiseOne.then(function(){
//     console.log("Promise consumed.");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task 2.");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved.");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({ username : "Aditya", email : "example@email.com" })
//     }, 1000);
// })
// promiseThree.then((user) => {
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({ username : "Aditya", email : "example@email.com" });
//         }else{
//             reject('Something went wrong.');
//         }
//     }, 2000);
// })
// promiseFour.then().catch()
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected."))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({ username : "JavaScript", password : "123" });
        }else{
            reject('JS went wrong.');
        }
    }, 2000);
})

async function consumePromiseFive(){
    try{const response = await promiseFive
    console.log(response)}
    catch(error){
        console.log(error)
    }

}

consumePromiseFive()