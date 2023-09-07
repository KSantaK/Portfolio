// 0- apple, 1- orange, 2- cherry
const fruits =["apple","orange","cherry"]

console.log(fruits);
console.log(fruits.length);
console.log(typeof fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits[3]);

fruits[0] = "banana";

console.log(fruits);

console.log("----------");
const array = []
// pievieno 
fruits.push("Raspberries")
console.log(fruits);

// noņem nost no saraksta
fruits.pop();
fruits.pop()

console.log("-----------")
fruits.unshift("blackberries");
console.log(fruits);

