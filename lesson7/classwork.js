const inputEl = document.querySelector("input");
const outputEl = document.querySelector("p");

inputEl.addEventListener("input", (ev) => {
  const newValue = ev.target.value;
  outputEl.textContent = newValue;
});