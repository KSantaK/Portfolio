 //Creates a new post within given object.
function createPost(postObj){

    const content = postObj.querySelector("#post-content");
    const postsDiv = postObj.querySelector("#posts");

    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `<p>${content.value}</p>`;

    //Reply and delete for every post
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function(){
        console.log("Deleted post!")
        postsDiv.removeChild(postElement);
    }

    const replyButton = document.createElement("button");
    replyButton.innerHTML = "Reply";

    //Opens a new reply form
    replyButton.onclick = function(){
        console.log("Opened new reply form!")

        replyButton.style.display = "none";
        
        const replyText = document.createElement("textarea");
        const replyConfirm = document.createElement("button");
        const replyCancel = document.createElement("button");
        replyText.setAttribute("id", "post-content");
        replyConfirm.innerHTML = "Reply";
        replyCancel.innerHTML = "Cancel";

        replyCancel.onclick = function(){
            console.log("Cancelled reply form!")

            replyButton.style.display = "inline";
            this.parentNode.removeChild(replyText);
            this.parentNode.removeChild(replyConfirm);
            this.parentNode.removeChild(replyCancel);
        }

        //Calls createPost() again, passing parent comment as a parameter.
        replyConfirm.onclick = function(){
            console.log("Creating reply!");

            const replyPostDiv = document.createElement("div");
            replyPostDiv.setAttribute("id", "posts");
            postElement.appendChild(replyPostDiv);

            createPost(postElement);

            replyButton.style.display = "inline";
            this.parentNode.removeChild(replyCancel);
            this.parentNode.removeChild(replyText);
            this.parentNode.removeChild(replyConfirm);
        }

        postElement.appendChild(replyText);
        postElement.appendChild(replyConfirm);
        postElement.appendChild(replyCancel);
        
    }


    postElement.appendChild(deleteButton);
    postElement.appendChild(replyButton);
    postsDiv.appendChild(postElement);

    content.value = "";

    console.log("Post created!");
}


//Event listener for every comment form
const commentForm = document.querySelectorAll("#new-post-form");
console.log(commentForm.length);

for (const f of commentForm){
    f.addEventListener("submit", function(e){
        e.preventDefault();
        createPost(this.parentNode);
    });
}



// Functional reaction icons
const icons = document.querySelectorAll(".fa-heart, .fa-thumbs-up");
for (i of icons){
    i.addEventListener("click", function(){
        console.log("Clicked reaction icon!");
        let countDisplay = this.parentNode.querySelector(".counter");
        let count = countDisplay;
        if (this.classList.contains("fas")){
            this.classList.remove("fas");
            count--;
        } else{
            this.classList.add("fas");
            count++;
        }
        
        countDisplay.innerHTML = count;
    });
}
