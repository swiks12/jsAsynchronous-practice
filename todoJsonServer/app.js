// [] i s atruthy vakues which always true regardless of it contains value or not

const api="http://localhost:3000/todos";


// selectors
// const body=document.querySelector("body");
const todoTextFieldValue=document.querySelector("#todo-txt-field");
const openPopUpBtn=document.querySelector("#open-popup");
const popUpCreateBtn=document.querySelector("#popup-btn-create");
const popUpCloseBtn=document.querySelector("#popup-btn-close");
const createBtn=document.querySelector("#todo-create-btn");
const getTodoContainer=document.querySelector(".todo-container");
const popUpContainer=document.querySelector(".popup-container");
const trackStatus=document.getElementById("todo-status");



// functions
const fetchTodoFromDB=async(e)=>{
    const response=await fetch(api);
    const todos=await response.json();
    return todos;
    // console.log(todos)
}


const handleCreate=async(e)=>{
    e.preventDefault();
    let todoValue=todoTextFieldValue.value;
    const newTodo={todoText:todoValue,completed:false}
    const response=await fetch(api,{method:'POST',
        headers:{
            // content ko type chai json vanera bujhne kaam ko lagi ho yo
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newTodo)
    })
    alert("todo-added")
    getTodos();
}

openPopUpBtn.addEventListener("click",()=>{
    popUpContainer.hidden=false;
    getTodoContainer.hidden=true;
    trackStatus.hidden=true;
    openPopUpBtn.hidden=true;
    
})

popUpCreateBtn.addEventListener("click",handleCreate)

popUpCloseBtn.addEventListener("click",()=>{
    // hiding the modal
    popUpContainer.hidden=true;
    getTodoContainer.hidden=false
    trackStatus.hidden=false
    openPopUpBtn.hidden=false;

})


// reload problem solved by putting the db file outside in d drive ,the chnages bot being seen was due to async await missing in parts
const handleComplete=async(completeId)=>{
    const updateStatus={completed:true};
    const response=await fetch(`http://localhost:3000/todos/${completeId}`,{method:'PATCH',headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(updateStatus)}); 
    getTodos();
}


const handleDelete=async(deleteId)=>{
    const response=await fetch(`http://localhost:3000/todos/${deleteId}`,{method:'DELETE'})
    getTodos();
}



const displayTodo=(fetchedTodos,status)=>{
    // if i do not clear the inner html then jun completed array return huncha tyasmai append huncha dekhaune bela harek patak div chai clear garnu parxa
    // console.log(status,"from here")
    getTodoContainer.innerHTML=" ";
    for (let i = 0; i < fetchedTodos.length; i++) {
        // console.log(trackStatus.value)
            var parentDiv=document.createElement("div");
            var btnDiv=document.createElement("div");
            var pEl=document.createElement("p");
            var tickBtn=document.createElement("button");
            var crossBtn=document.createElement("button");
            tickBtn.innerHTML='<span class="material-symbols-outlined">check</span>';
            crossBtn.innerHTML='<span class="material-symbols-outlined">close</span>'
            // creating a div to put what needs to be shown in a container so that not all items are considered seperate children
            parentDiv.classList.add("todo-parent-div")
            btnDiv.classList.add("todo-btn-div")
            pEl.classList.add("todo-item")
            tickBtn.classList.add("tick-btn")
            crossBtn.classList.add("cross-btn")
            console.log(fetchedTodos[i].todoText)
            pEl.innerText=fetchedTodos[i].todoText;
            getTodoContainer.appendChild(parentDiv);
            parentDiv.appendChild(pEl);
            parentDiv.appendChild(btnDiv)
            //if the staus is  'All' and if completed is true then sabai todo dekhauda ali kam opcity huncha
            btnDiv.appendChild(tickBtn);
            btnDiv.appendChild(crossBtn);
            if(status=="All" && fetchedTodos[i].completed==true){
                const completedTodo=document.querySelectorAll(".todo-parent-div");    //add class list garesi actual class add huncha
                completedTodo[i].classList.add("todo-completed")
                
            }
    
            crossBtn.addEventListener("click",()=>{
                handleDelete(fetchedTodos[i].id)
            })
    
            tickBtn.addEventListener("click",()=>{
                handleComplete(fetchedTodos[i].id)
            })
    }
}

const getTodos=async(e)=>{
    let fetchedTodos=await fetchTodoFromDB();
    console.log(fetchedTodos,"from this")
    console.log(fetchedTodos.length);
       displayTodo(fetchedTodos,trackStatus.value);
    let initialStatus;
    trackStatus.addEventListener("change",()=>{
        initialStatus=trackStatus.value;

        if(initialStatus=="Completed"){       
            const completedtodos=fetchedTodos.filter(item=>item.completed==true);
            displayTodo(completedtodos,"Completed")
        }
        else if (initialStatus=="All") {
            displayTodo(fetchedTodos,"All")
        } else {
            const incompleteTodos=fetchedTodos.filter(item=>item.completed==false)
            displayTodo(incompleteTodos,"Incomplete")
        }
    })
}
getTodos();


// event listeners
// createBtn.addEventListener("click",handleCreate);



