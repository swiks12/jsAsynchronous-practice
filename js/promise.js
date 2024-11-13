// promise is an object which takes a fcuntion with 2 parameters resolve and reject

const checkEvenNum=new Promise((resolve,reject)=>{
    var num=25;
    if(num % 2==0){
        resolve("Even number")
    }
    else{
        reject("Not even number")
    }
})


// .then is used to handle the resolve part and .catch handles the reject part
checkEvenNum.then((message)=>{console.log(message)}).catch((message)=>console.log(message))


// the states are usually pendeing,resolved,rejected.No result is seen in pending state