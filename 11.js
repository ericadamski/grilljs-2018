// Use commonly understood functions to describe code
const list = [1, 2, 3, 4, 5, 6];

console.log(list.map(v => v + 1));

console.log(list.reduce((sum, v) => sum + v, 0));

console.log(list.filter(v => v % 3 !== 0));
