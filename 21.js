function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((value, fn) => fn(value), initialValue);
  };
}

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

const d = pipe(
  b,
  c,
  a
);

console.clear();
// Will always give same result!
console.log(d(1), d(1), d(1), d(1));
