const array = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; // array.length = 10

for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
}

const arrayWithEmails = [
  "test@gmail.com",
  "Hell!@£@gmail.com",
  ".gmail",
  "234@inbox",
];

for (let i = 0; i < arrayWithEmails.length; i++) {
  if (!arrayWithEmails[i].includes("@")) {
    console.log("Email is not valid");
  }
}

const nameArray = ["john", "TaNE", "", "J", "Bames", "Kenny"];
for (let i = 0; i < nameArray.length; i++) {
  const name = nameArray[i];

  if (!name) {
    console.log(`Name is not valid: ${i}: ${name}`);
  }

  const currentFirstLetter = name.charAt(0);
  const uppercaseFirstLetter = currentFirstLetter.toUpperCase();

  if (currentFirstLetter !== uppercaseFirstLetter) {
    console.log(`Name is not valid: ${i}: ${name}`);
  }
}

const currentColor = "yellow";
const colors = ["red", "green", "yellow", "blue", "orange", "purple"];

let isColorFound = false;

for (let i = 0; i < colors.length; i++) {
  if (currentColor === colors[i]) {
    console.log("Color is found");
    isColorFound = true;
    break;
  }

  console.log("Color is not found");
}

console.log(isColorFound);