// hoisting - varibales can be used before they are declared


console.log(x)
var x=6;
// gives undefined in console

// in let and const the value cannot be used unless it has been declared
// console.log(x)
// const x=6;

console.log(x)
let x=6;

// only the varible declarations are hosted and not the intialization