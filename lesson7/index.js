const titleElement = document.getElementById("title");
const navElements = document.getElementsByClassName("nav-element");
const firstNavElement = document.querySelector(".nav-element");
const navElements2 = document.querySelectorAll(".nav-element");

titleElement.textContent = "New Content!";
titleElement.innerHTML = "New Content 123";

titleElement.style.color = "#000";

firstNavElement.classList.add("highlight");
firstNavElement.classList.remove("highlight");
firstNavElement.classList.toggle("open");

// 1. Create new element
const newElement = document.createElement("button");
newElement.textContent = "New Button 1";
const newElement2 = document.createElement("button");
newElement2.textContent = "New Button 2";

// 2. Find element where you want to insert new element
const ulElement = document.querySelector("header nav ul");

// 3. Insert new element
ulElement.appendChild(newElement);

// 4. Insert new element before another element
ulElement.prepend(newElement2);

Array.from(ulElement.children).forEach((element) => {
  if (element.tagName !== "LI") {
    element.remove();
  }
});