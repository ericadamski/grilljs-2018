const compose = require("./sol.13.js");

// pure function composition!
function appendExclamation(str) {
  return `${str}!`;
}

function addOne(i) {
  return i + 1;
}

function toString(v) {
  return `${v}`;
}

const addExcitment = compose(
  appendExclamation,
  toString,
  addOne
);

console.clear();
// Will always give same result!
console.log(addExcitment(1), addExcitment(1), addExcitment(1), addExcitment(1));
