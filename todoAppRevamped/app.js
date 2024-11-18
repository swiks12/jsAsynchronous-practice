// [] i s atruthy vakues which always true regardless of it contains value or not
var todos=JSON.parse(localStorage.getItem("todos")) || [] ;

// selectors
const todoTextFieldValue=document.querySelector("#todo-txt-field");
const createBtn=document.querySelector("#todo-create-btn");
const getTodoContainer=document.querySelector(".todo-container");



// functions
const fetchedTodosLocalStorage=()=>{
    var getTodosFromLocalStorage=JSON.parse(localStorage.getItem("todos"));
    return getTodosFromLocalStorage;
}

// passing the index of the todo-item to be deleted
const handleDelete=(index)=>{
    // splice ma first parameter is index and second is how many items to delete from that index
    todos.splice(index,1);
    console.log(todos)
    localStorage.setItem("todos",JSON.stringify(todos));
    
    
}

const handleCreate=()=>{
    var todo=todoTextFieldValue.value;
    if(todo!=""){
        var todoArray=fetchedTodosLocalStorage();
        let flag=0;
        // to make sure there are no duplicate entries of todo
            for (let i = 0; i < todoArray.length; i++) {
                if(todo===todoArray[i]){
                    // increment the value of flag when duplicacy found
                    flag+=1
                }
            }
            if (flag==0) {
                todos.push(todo);
            }
            else{
                alert("Todo Already exists! 😉")
            }
    }
    else{
        alert("Input your todo first! 😭")
    }
    // JSON.stringify to store the todo in more formatted way rather than plain text
    localStorage.setItem("todos",JSON.stringify(todos));
}

const getTodos=()=>{
    var fetchedTodos=fetchedTodosLocalStorage();
    console.log(fetchedTodos)
    for (let i = 0; i < fetchedTodos.length; i++) {

        var parentDiv=document.createElement("div");
        var btnDiv=document.createElement("div");
        var pEl=document.createElement("p");
        var tickBtn=document.createElement("button");
        var crossBtn=document.createElement("button");
        tickBtn.innerHTML='<span class="material-symbols-outlined">check</span>';
        crossBtn.innerHTML='<span class="material-symbols-outlined">close</span>'
        // creating a div to put what needs to be shown in a conatiner so that not all items are considered seperate children
        parentDiv.classList.add("todo-parent-div")
        btnDiv.classList.add("todo-btn-div")
        pEl.classList.add("todo-item")
        tickBtn.classList.add("tick-btn")
        crossBtn.classList.add("cross-btn")
        pEl.innerText=fetchedTodos[i];
        getTodoContainer.appendChild(parentDiv);
        parentDiv.appendChild(pEl);
        parentDiv.appendChild(btnDiv)
        btnDiv.appendChild(tickBtn);
        btnDiv.appendChild(crossBtn);


        crossBtn.addEventListener("click",()=>{handleDelete(i)})  

    }
}
getTodos();


// event listeners
createBtn.addEventListener("click",handleCreate);


