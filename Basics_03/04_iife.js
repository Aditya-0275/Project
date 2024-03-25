//  Immediately Invoked Function Expressions.

(function one(){
    console.log("DB Connected")
})(); // iife is used to remove the pollution from the global scope. This is named iife.f

( (name) => {
    console.log(`DB Connected 2.0 ${name}`)
})('Atharva');
