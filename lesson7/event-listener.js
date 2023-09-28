const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");
const countElement = document.querySelector(".count");

const handleButtonClick = (value) => {
  const currentValue = Number(countElement.textContent);
  countElement.textContent = currentValue + value;
};

decreaseButton.addEventListener("click", () => {
  handleButtonClick(-1);
});

increaseButton.addEventListener("click", () => {
  handleButtonClick(1);
});