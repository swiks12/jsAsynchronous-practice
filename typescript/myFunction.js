"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
// in the case of funtion defining type is very important
function getUpper(value) {
    return value.toUpperCase();
}
var upperCaseValue = getUpper("swikriti");
console.log(upperCaseValue);
function signUpUser(name, email, isPaid) {
}
signUpUser("swikriti", "@gmail.com", false);
// nut like this we can pass the default value so that error naawos vanera
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// yah hamle isPaid ko value pass garenam vane chai error aaucha kinaki argument 3 ota cha 
loginUser("h", "h@h.com");
