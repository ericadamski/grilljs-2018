// normal js pipe
// remember compose?
const compose = require("./13.js");

module.exports = function pipe(...fns) {
  // in compose we did fns.reverse(), not here!
  // or we can use compose but reverse the order of the functions first
  return compose(fns.reverse());
};

function split(str) {
  return str.split("");
}

function capitalize(arr) {
  arr[0] = arr[0].toUpperCase();

  return arr;
}

function joinWithExclamations(arr) {
  return arr.join("!") + "!";
}

console.log(
  pipe(
    split,
    capitalize,
    joinWithExclamations
  )("hello griljs")
);
