// async await 
// async makes a function return a promise
// await- wait for the promise resolve

const getData=async()=>{
    var newPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I AM PROMISE");
        },5000)
    })
document.getElementById("demo").innerText=await newPromise;

}

getData();


