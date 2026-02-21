const marvel=["thor","ironman","spiderman"];
const fruits=["apple","mango","orange"];

marvel.push(fruits);
console.log(marvel);   // [ 'thor', 'ironman', 'spiderman', [ 'apple', 'mango', 'orange' ] ]

// const newarray=marvel.concat(fruits);
// console.log(newarray);

const newarray=[...marvel,...fruits]
console.log(newarray)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Purva"));
console.log(Array.from("Purva"));
