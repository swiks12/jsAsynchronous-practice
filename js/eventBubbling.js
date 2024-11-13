// event bubbling happens when the elemenets are nested and the event propagates from child->parent 

// btn matra clcik garepani button is inside the div element so div opoani click vairacha

const divEl=document.getElementById("divClick");
const btnEl=document.getElementById("btnClick");

btnEl.addEventListener("click",(event)=>{
    console.log("btn clicked")
    //this line stops the propagation
    // output in console is btb clicked the propagation to the div has been nullified
    event.stopPropagation();
})

divEl.addEventListener("click",()=>{
    console.log("div clicked")
})

