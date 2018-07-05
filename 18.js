const compose = require("./sol.13.js");

// pure function composition!
function a(str) {
  return `${str}!`;
}

function b(i) {
  return i + 1;
}

function c(v) {
  return `${v}`;
}

const d = compose(
  a,
  c,
  b
);

console.clear();
// Will always give same result!
console.log(d(1), d(1), d(1), d(1));
