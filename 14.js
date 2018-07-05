// f(g(x))
module.exports = function compose(...fns) {
  // TODO: write this
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
  compose(
    joinWithExclamations,
    capitalize,
    split
  )("hello griljs")
);
