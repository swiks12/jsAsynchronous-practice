const api = "http://localhost:3000/todos";

// selectors
const todoTextFieldValue = document.querySelector("#todo-txt-field");
const openPopUpBtn = document.querySelector("#open-popup");
const popUpCreateBtn = document.querySelector("#popup-btn-create");
const popUpCloseBtn = document.querySelector("#popup-btn-close");
const todoContainer = document.querySelector(".todo-container");
const popUpContainer = document.querySelector(".popup-container");
const filterTodo = document.getElementById("todo-status");

// functions
const fetchTodoFromDB = async () => {
    const response = await fetch(api);
    const todos = await response.json();
    return todos;
};

const handleCreate = async (e) => {
    e.preventDefault();
    let todoValue = todoTextFieldValue.value;
    const newTodo = { todoText: todoValue, completed: false };
    const response = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    });
    popUpContainer.hidden = true;
    todoContainer.hidden = false;
    filterTodo.hidden = false;
    openPopUpBtn.hidden = false;
    todoTextFieldValue.value = "";
    getTodos();
};

openPopUpBtn.addEventListener("click", () => {
    popUpContainer.hidden = false;
    todoContainer.hidden = true;
    filterTodo.hidden = true;
    openPopUpBtn.hidden = true;
});

popUpCreateBtn.addEventListener("click", handleCreate);

popUpCloseBtn.addEventListener("click", () => {
    popUpContainer.hidden = true;
    todoContainer.hidden = false;
    filterTodo.hidden = false;
    openPopUpBtn.hidden = false;
});

const handleComplete = async (completeId) => {
    const updateStatus = { completed: true };
    const response = await fetch(`http://localhost:3000/todos/${completeId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateStatus)
    });
    getTodos();
};

const handleDelete = async (deleteId) => {
    const response = await fetch(`http://localhost:3000/todos/${deleteId}`, { method: 'DELETE' });
    getTodos();
};

const dragAfterElement = (container, y) => {
    const draggableElements = [...container.querySelectorAll('.todo-parent-div:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
};

const displayTodo = (fetchedTodos, status) => {
    todoContainer.innerHTML = " ";
    for (let i = 0; i < fetchedTodos.length; i++) {
        var parentDiv = document.createElement("div");
        var btnDiv = document.createElement("div");
        var pEl = document.createElement("p");
        var tickBtn = document.createElement("button");
        var crossBtn = document.createElement("button");
        tickBtn.innerHTML = '<span class="material-symbols-outlined">check</span>';
        crossBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
        parentDiv.classList.add("todo-parent-div");
        btnDiv.classList.add("todo-btn-div");
        pEl.classList.add("todo-item");
        tickBtn.classList.add("tick-btn");
        crossBtn.classList.add("cross-btn");
        pEl.innerText = fetchedTodos[i].todoText;
        todoContainer.appendChild(parentDiv);
        parentDiv.appendChild(pEl);
        parentDiv.appendChild(btnDiv);
        btnDiv.appendChild(tickBtn);
        btnDiv.appendChild(crossBtn);

        parentDiv.draggable = true;
        const draggables=document.querySelectorAll(".todo-parent-div")
        draggables.forEach((draggable)=>{

            draggable.addEventListener('dragstart', () => {
                draggable.classList.add("dragging");
            });
    
            draggable.addEventListener("dragend", () => {
                draggable.classList.remove("dragging");
            });
        })

        todoContainer.addEventListener("dragover", (e) => {
            // e.preventDefault() garena vane element lai ek arko ko mathi element halna didaina
            e.preventDefault();
            const afterElement = dragAfterElement(todoContainer, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                todoContainer.append(draggable);
            } else {
                todoContainer.insertBefore(draggable, afterElement);
            }
        });

        if (status == "All" && fetchedTodos[i].completed == true) {
            const completedTodo = document.querySelectorAll(".todo-parent-div");
            completedTodo[i].classList.add("todo-completed");
        }

        crossBtn.addEventListener("click", () => {
            handleDelete(fetchedTodos[i].id);
        });

        tickBtn.addEventListener("click", () => {
            handleComplete(fetchedTodos[i].id);
        });
    }
};

const getTodos = async (e) => {
    let fetchedTodos = await fetchTodoFromDB();
    console.log(fetchedTodos, "from this");
    console.log(fetchedTodos.length);
    displayTodo(fetchedTodos, filterTodo.value);
    let initialStatus;
    filterTodo.addEventListener("change", () => {
        initialStatus = filterTodo.value;

        if (initialStatus == "Completed") {
            const completedtodos = fetchedTodos.filter(item => item.completed == true);
            displayTodo(completedtodos, "Completed");
        } else if (initialStatus == "All") {
            displayTodo(fetchedTodos, "All");
        } else {
            const incompleteTodos = fetchedTodos.filter(item => item.completed == false);
            displayTodo(incompleteTodos, "Incomplete");
        }
    });
};
getTodos();
