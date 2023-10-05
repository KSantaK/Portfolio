 document.querySelectorAll (".post-form")
// Array to store posts
const postsArray = [];

// Function to create a new post
function createPost() {
    const content = document.getElementById("post-content").value;

    // Create a new post object
    const post = { content };

    // Add the post to the posts array
    postsArray.push(post);

    // Clear the form fields
    document.getElementById("post-content").value = "";

    // Refresh the post list
    displayPosts();
}

// Function to delete a post
function deletePost(index) {
    postsArray.splice(index, 1);
    displayPosts();
}

// Function to display all posts
function displayPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    for (let i = 0; i < postsArray.length; i++) {
        const post = postsArray[i];
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <p>${post.content}</p>
            <button class="delete-button" onclick="deletePost(${i})">Delete</button>
        `;
        postsDiv.appendChild(postElement);
    }
}

// Event listener for the new post form
document.getElementById("new-post-form").addEventListener("submit", function (e) {
    e.preventDefault();
    createPost();
});


// Initial display of posts
displayPosts();


// Icons count