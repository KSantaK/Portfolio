const array = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; // array.length = 10

array.forEach((number, i) => {
  console.log(i, number);
});

array.map((number, i) => {
  console.log(i, number);
});

console.log("---------------------");

const someArray = [1, 4, "9", "5", 1, 1, "23123", "2.13", 4.23];
let numbers = [];

// for (let i = 0; i < someArray.length; i++) {
//   const currentElement = someArray[i];

//   numbers.push(Number(currentElement));
// }

someArray.forEach((currentElement) => {
  numbers.push(Number(currentElement));
});

numbers = someArray.map((currentElement) => {
  return Number(currentElement);
});

console.log(numbers);

const newArray = array.map((number) => {
  return number * 2;
});