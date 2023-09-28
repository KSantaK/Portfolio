fetch("https://jsonplaceholder.typicode.com/todos") // request to server
.then ((response) => {
    return response.json ();
})
.then ((data) => {
    console.log ('in promise chain:'data);
});