const data = fetch("https://jsonplaceholder.typicode.com/todos") // request to server
    .then ((response) => {
        return response.json ();
    })

    .then ((data) => {
        console.log (data);
        const body = document.querySelector("body");

        let content = "";

        data.forEach((todo)) => {
            const todoElement = document.createElement("div");
            todoElement.innerHTML = 
                <h3>${todo.title}</h3>
                completed: ${todo.completed};

        body.appendChild(todoElement);
        });

        const todosElement = document.createElement ("div");

    });

    const generateCat = () => {
        fetch ("https://api.thecatapi.com/v1/images/search?format=json")
        .then ((response) => {
            return response.json();
        })
        .then((data) => {
            let imageElement = document.querySelector("img");

            console.log(imageElement);

            if (!imageElement) {
                imageElement = document.createElement ("img");
            }

            imageElement.scr= data [0],url;
            imageElement.height = data[0].height;
            imageElement.width = data [0].width;
        })
    }

    const button = document.querySelector ("button");
    button.addEventListener ("click", () => {
        generateCat();
    });