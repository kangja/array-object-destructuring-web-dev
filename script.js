const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const a = alphabet[0];
// const b = alphabet[1];

const [a, , c, ...rest] = alphabet;

console.log(a);
console.log(c);
console.log(rest);
