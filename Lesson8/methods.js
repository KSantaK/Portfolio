const getTodos = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    console.log(data);
};

const createTodos = async () => {
    const testTodo = {
        completed: false,
        title: "Test todo 123",
        userId: 1,
    };

    console.log(testTodo);
    console.log(JSON.stringify(testTodo));


    fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: testTodo,
});
};

createTodos();