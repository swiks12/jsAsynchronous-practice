// callback practice

// asynchronous nature handle to make sure a task happens only after a certain task is completed


// vv simple example for basic
const greet=(callback)=>{
    console.log("I am greet!")
    callback();
}

const hello=()=>{
    console.log("I am hello")
}

// in function call it should be name of function and in function definition part callback represents the fuction

greet(hello);
