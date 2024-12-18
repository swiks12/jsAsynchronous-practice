let greetings:string="Swikriti"
// methods all relating to string are shown
greetings.toLowerCase()
console.log(greetings)


// number
//   we can avoid using  number behind userId beacuse typescript is smart enough to know what kind of value is going to get stored, called type inference
let userId=334455.2


// boolean
let isLoggedIn: boolean=false


// any 
// we do o tknow what kind of value this hero is getting
let hero;

let getHero=()=>{
    return "hero hu main"
}


// any use garera we can send any type of value form that fucntion ani nth is happening . any use garne bad practice
hero=getHero();



// mathi yo halena vane greetings ma error aaucha 
export {}