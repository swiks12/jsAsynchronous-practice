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


const handleComplete=(completeId)=>{
    const updateStatus={completed:true};
    const response=fetch(`http://localhost:3000/todos/${completeId}`,{method:'PATCH',headers:{
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
    // if(todo!=""){
    //     var todoArray=fetchedTodosLocalStorage();
    //     let flag=0;
    //     // to make sure there are no duplicate entries of todo
    //         for (let i = 0; i < todoArray.length; i++) {
    //             if(todo===todoArray[i]){
    //                 // increment the value of flag when duplicacy found
    //                 flag+=1
    //             }
    //         }
    //         if (flag==0) {
    //             todos.push(todo);
    //         }
    //         else{
    //             alert("Todo Already exists! 😉")
    //         }
    // }
    // else{
    //     alert("Input your todo first! 😭")
    // }
    // // JSON.stringify to store the todo in more formatted way rather than plain text
    // localStorage.setItem("todos",JSON.stringify(todos));
    

}

const getTodos=async()=>{
    var fetchedTodos=await fetchedTodo();
    console.log(fetchedTodos,"from this")
    console.log(fetchedTodos.length);
    for (let i = 0; i < fetchedTodos.length; i++) {
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
        if(fetchedTodos[i].completed==true){
            parentDiv.classList.add("todo-completed")
        }

        crossBtn.addEventListener("click",()=>{
            handleDelete(fetchedTodos[i].id)
        })

        tickBtn.addEventListener("click",()=>{
            handleComplete(fetchedTodos[i].id)
        })
    }
}
getTodos();


// event listeners
createBtn.addEventListener("click",handleCreate);



