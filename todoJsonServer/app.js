// [] i s atruthy vakues which always true regardless of it contains value or not

const api="http://localhost:3000/todos";
var todos=JSON.parse(localStorage.getItem("todos")) || [] ;

// selectors
const todoTextFieldValue=document.querySelector("#todo-txt-field");
const createBtn=document.querySelector("#todo-create-btn");
const getTodoContainer=document.querySelector(".todo-container");



// functions
const fetchedTodo=async()=>{
    const response=await fetch(api);
    const todos=await response.json();
    return todos;
    // console.log(todos)
}


const handleComplete=async(completeId)=>{
    const updateStatus={completed:true};
    const response=await fetch(`http://localhost:3000/todos/${completeId}`,{method:'PATCH',headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(updateStatus)}); 
}


handleDelete=(deleteId)=>{
    const response=fetch(`http://localhost:3000/todos/${deleteId}`,{method:'DELETE'})
}

const handleCreate=()=>{
    var todoValue=todoTextFieldValue.value;
    const newTodo={todoText:todoValue,completed:false}
    const response=fetch(api,{method:'POST',
        headers:{
            // content ko type chai json vanera bujhne kaam ko lagi ho yo
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newTodo)
    })
}


const displayTodo=(fetchedTodos)=>{
    // if i do not clear the inner html then jun completed array return huncha tyasmai append huncha dekhaune bela harek patak div chai clear garnu parxa
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
            btnDiv.appendChild(tickBtn);
            btnDiv.appendChild(crossBtn);
    
            crossBtn.addEventListener("click",()=>{
                handleDelete(fetchedTodos[i].id)
            })
    
            tickBtn.addEventListener("click",()=>{
                handleComplete(fetchedTodos[i].id)
            })
    }
}

const getTodos=async()=>{
    var fetchedTodos=await fetchedTodo();
    console.log(fetchedTodos,"from this")
    console.log(fetchedTodos.length);
    const trackStatus=document.getElementById("todo-status");
       displayTodo(fetchedTodos);
    var initialStatus;
    trackStatus.addEventListener("change",()=>{
        initialStatus=trackStatus.value;

        if(initialStatus=="Completed"){       
            const completedtodos=fetchedTodos.filter(item=>item.completed==true);
            displayTodo(completedtodos)
        }
        else if (initialStatus=="All") {
            displayTodo(fetchedTodos)
        } else {
            displayTodo(fetchedTodos.filter(item=>item.completed==false))
        }
    })
}
getTodos();


// event listeners
createBtn.addEventListener("click",handleCreate);



