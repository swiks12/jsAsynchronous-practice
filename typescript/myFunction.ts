// if we only do this much we are not stopping the function from returning any value ,it can return number or even a string add number to function
function addTwo(num: number):number{
    return num+2;
    // return "hello"
}

addTwo(5)

// in the case of funtion defining type is very important
function getUpper(value:string){
    return value.toUpperCase();
}


let upperCaseValue=getUpper("swikriti")
console.log(upperCaseValue)

function signUpUser(name:string,email:string,isPaid:boolean){

}
signUpUser("swikriti","@gmail.com",false)

// nut like this we can pass the default value so that error naawos vanera
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

}

// yah hamle isPaid ko value pass garenam vane chai error aaucha kinaki argument 3 ota cha 
loginUser("h","h@h.com")



function getValue(myVal:number){
    if (myVal>5){
        return true
    }
    return "200 ok"
}


// basics of how you do it in arrow function
const getHello=(s:string):string=>{
    return "hello"

}

// const heros=["thor","spiderman","ironman"]
const heros=[1,2,3]
// typescr(ipt is smart enough to knwo what is coming to it aafai number ma change garesi it knows the array contains pure numbers
heros.map((hero)=>{
    return `hero is ${hero}`
})


// explicitely void lekhna parcha, ettikai pani void dekhiracha tara void lekhna parcha to let know that the function returns nothing
function consoleError(errmsg: string):void{
    console.log(errmsg)
}

// never type - used for forceful termination of program, never type returns nothing
function handleError(errmsg: string):never{
    throw new Error(errmsg)
}

export {}