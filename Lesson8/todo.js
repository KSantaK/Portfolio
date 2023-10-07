const createTodoButton =document.querySelector(".create-todo");
const inputField = document.getElementById ("todo");
const todoWrapper = document.querySelector(".todo-wrapper");

function createTodoElement(content) {
    const divElement = document.createElement("div");
    divElement.classList.add("todo-item");

    divElement.innerHTML ='<p>${content}</p><button class="delete-todo">Delete</button>';

    return divElement;

}

createTodoButton.addEventListener("click", () => {
    const inputValue = inputField.value;

    
    const todoElement= createTodoElement(inputValue);

    todoWrapper.appendChild(todoElement);
 

    inputField.value = "";
});