const faHeartCount = document.querySelector (".fa-heart-count");
const btnbutton = document.querySelector (".btn");
const countElement = document.querySelector (".count");

faHeartCount.addEventListener ("click", () => {
  const currentValue = countElement.textContent;
  console.log (currentValue);
});


btnbutton.addEventListener ("click", () => {
  const currentValue = Number(countElement.textContent);

  countElement.textContent = currentValue +1;
  
})