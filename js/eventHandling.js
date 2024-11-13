// to generate random numberin every click


// to get random numbers between 0 and 1 
const btnRandom=document.getElementById("btn-random-num");
btnRandom.addEventListener("click",()=>{
    const rndmNum=Math.random();
    const para=document.getElementById("data");
    para.innerText=rndmNum;
})


// the event names should all be lowercase.Initially was confused with onMouseOver of tailwind
const divColorChanger=document.querySelector(".color-changer");
divColorChanger.addEventListener("mouseover",()=>{
    // access the attributes using. and to change value use =
    divColorChanger.style.backgroundColor="red";
})
divColorChanger.addEventListener("mouseout",()=>{
    divColorChanger.style.backgroundColor="yellow";
})

