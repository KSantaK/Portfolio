const data = fetch("https://jsonplaceholder.typicode.com/todos") // request to server
    .then ((response) => {
        return response.json ();
    })
    .then ((data) => {
        console.log (data);
        const body = document.querySelector("body");

    data.forEach((todo)) => {
        const todoElement = document.createElement("div");
        todoElement.innerHTML = 
            <h3>${todo.title}</h3>
            completed: ${todo.completed}
    ;
    body.appendChild(todoElement);
    });
    });