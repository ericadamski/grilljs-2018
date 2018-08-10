function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((value, fn) => fn(value), initialValue);
  };
}

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

// add one and make string

const addExcitment = pipe(
  addOne,
  toString,
  appendExclamation
);

console.clear();
// Will always give same result!
console.log(addExcitment(1), addExcitment(1), addExcitment(1), addExcitment(1));
